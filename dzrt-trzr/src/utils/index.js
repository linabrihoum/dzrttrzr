import { compareAsc, compareDesc, parseISO } from "date-fns";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareAsc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
