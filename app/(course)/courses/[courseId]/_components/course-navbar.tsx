import { Chapter, Course, UserProgress } from "@prisma/client";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { NavbarRoutes } from "@/components/core/navbar-routes";
import { CourseMobileSidebar } from "./course-mobile-sidebar";

import { db } from "@/lib/db";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[]
  };
  progressCount: number;
}

export const CourseNavbar = async ({course, progressCount}: CourseNavbarProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSidebar
        course={course}
        progressCount={progressCount}
      />
      <NavbarRoutes />
    </div>
  );
};
