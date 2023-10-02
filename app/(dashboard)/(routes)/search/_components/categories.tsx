"use client";

import {Category} from "@prisma/client";

import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
  FcProcess
} from "react-icons/fc";
import {IconType} from "react-icons";
import {CategoryItem} from "@/app/(dashboard)/(routes)/search/_components/category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "React.js": FcEngineering,
  "TypeScript": FcMultipleDevices,
  "Prisma": FcProcess,
  "Tailwind": FcMusic,
  "NodeJS": FcFilmReel,
  "JavaScript": FcOldTimeCamera,
  "Next.js": FcSalesPerformance,
  "PostgreSQL": FcSportsMode,
}

export const Categories = ({items}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
