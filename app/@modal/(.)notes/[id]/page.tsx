"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";

interface InterceptedNotePageProps {
  params: { id: string };
}

export default function InterceptedNotePage({
  params,
}: InterceptedNotePageProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreviewClient id={params.id} />
    </Modal>
  );
}
