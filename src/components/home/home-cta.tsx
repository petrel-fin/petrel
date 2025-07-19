import { Play } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function HomeCta() {
  return (
    <section className="py-32">
      <div className="container overflow-hidden">
        <div className="bg-muted/50 relative mx-auto flex max-w-(--breakpoint-xl) flex-col justify-between gap-6 overflow-hidden rounded-xl border md:flex-row">
          <div className="max-w-xl self-center p-6 md:p-12">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Explore Our Platform
            </h2>
            <p className="text-muted-foreground mt-4 md:text-lg">
              Discover the full potential of our platform. Try our interactive
              demo or watch a comprehensive walkthrough today.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Try Demo</Button>
              <Button variant="outline">
                Watch Video
                <Play className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative ml-6 max-h-96 md:mt-8 md:ml-0">
            <img
              src="https://shadcnblocks.com/images/block/block-3.svg"
              alt="placeholder"
              className="absolute -bottom-12 left-4 h-48 -translate-x-1/2 -rotate-120"
            />
            <img
              src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
              alt="placeholder"
              className="z-10 aspect-video h-full w-full rounded-tl-xl border-t border-l object-cover pt-3.5 pl-3.5 backdrop-blur-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
