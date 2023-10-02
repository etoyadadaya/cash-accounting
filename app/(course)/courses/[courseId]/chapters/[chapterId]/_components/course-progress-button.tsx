"use client";

import toast from "react-hot-toast";
import axios from "axios";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useConfettiStore } from "@/hooks/use-confetti-store";

import { CheckCircle, XCircle } from "lucide-react";

interface CourseProgressButtonProps {
  chapterId: string;
  courseId: string;
  isCompleted?: boolean;
  nextChapterId?: string;
}

export const CourseProgressButton = ({courseId, chapterId, nextChapterId, isCompleted}: CourseProgressButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const confetti = useConfettiStore();

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
        isCompleted: !isCompleted
      });

      if (!isCompleted && !nextChapterId) {
        confetti.onOpen();
      }

      if (!isCompleted && nextChapterId) {
        router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
      }

      toast.success("Progress updated!");
      router.refresh();
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  const Icon = isCompleted ? XCircle : CheckCircle;

  return (
    <Button
      type="button"
      variant={isCompleted ? "outline": "success"}
      className="w-full md:w-auto"
      onClick={onClick}
      disabled={isLoading}
    >
      {isCompleted ? "Not completed" : "Mark as complete"}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  );
};
