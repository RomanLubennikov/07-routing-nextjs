"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/app/notes/NotePreview";

interface InterceptedNotePageProps {
  params: { id: string };
}

export default function InterceptedNotePage({
  params,
}: InterceptedNotePageProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview id={params.id} />
    </Modal>
  );
}
