import Image from "next/image";
import { EMAIL, Icon, PHONE_DISPLAY, PHONE_HREF, container, icons } from "./shared";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-porcelain sm:py-12 2xl:py-16">
      <div className={`${container} flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between`}>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold tracking-tight text-porcelain sm:text-2xl">
              Crystal Shield
            </p>
            <div className="relative h-6 w-6 brightness-0 invert sm:h-7 sm:w-7">
              <Image
                src="/crystal_sheild_logo.png"
                alt="Crystal Shield emblem logo"
                fill
                sizes="30px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="mt-1 text-sm text-porcelain/70 2xl:text-base">
            Window film solutions in Abu Dhabi, powered by Madico technology.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8 2xl:text-base">
          <a href={PHONE_HREF} className="flex items-center gap-2.5 hover:text-sea-glass">
            <Icon d={icons.phone} className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 hover:text-sea-glass">
            <Icon d={icons.mail} className="h-4 w-4" />
            {EMAIL}
          </a>
        </div>
      </div>

      <div className={`${container} mt-8 border-t border-porcelain/15 pt-6`}>
        <p className="text-xs text-porcelain/60 2xl:text-sm">
          © 2025 Crystal Shield Tint Insulation LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}