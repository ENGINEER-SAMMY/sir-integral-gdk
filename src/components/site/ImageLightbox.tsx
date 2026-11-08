import { createContext, useContext, useRef, useState, type ImgHTMLAttributes, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ExpandedImage = { src: string; alt: string };
const LightboxContext = createContext<((image: HTMLImageElement) => void) | null>(null);

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<ExpandedImage | null>(null);
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLImageElement | null>(null);

  function expand(element: HTMLImageElement) {
    trigger.current = element;
    setImage({ src: element.currentSrc || element.src, alt: element.alt });
    setOpen(true);
  }

  return (
    <LightboxContext.Provider value={expand}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="image-lightbox-backdrop" />
          <Dialog.Content
            className="image-lightbox"
            aria-describedby={undefined}
            onClick={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
            }}
          >
            <Dialog.Title className="sr-only">{image?.alt || "Expanded photograph"}</Dialog.Title>
            {image && <img src={image.src} alt={image.alt} className="image-lightbox-photo" />}
            <Dialog.Close asChild>
              <Button variant="outline" size="icon" className="image-lightbox-close" aria-label="Close expanded image">
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LightboxContext.Provider>
  );
}

// Keep the original img element and its sizing classes so existing layouts do not change.
export function LightboxImage({ className, alt = "", onClick, onKeyDown, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const expand = useContext(LightboxContext);
  return (
    <img
      {...props}
      alt={alt}
      className={cn(className, "expandable-photo")}
      role="button"
      tabIndex={0}
      aria-label={`Expand image: ${alt || "Photograph"}`}
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) expand?.(event.currentTarget);
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          expand?.(event.currentTarget);
        }
      }}
    />
  );
}