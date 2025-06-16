
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Replace these with your real YouTube video IDs
const YOUTUBE_VIDEO_IDS = [
  "jONA4FJeD78",  // Your new video
  "DPE6rVsomeg",  // YouTube Short
  "zA1ICppgby4",  // YouTube Short
  "_QPIr7GMem4",  // YouTube Short
];

export default function YouTubeVideosSection() {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
        Explore Our Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {YOUTUBE_VIDEO_IDS.map((id) => (
          <AspectRatio
            ratio={16 / 9}
            key={id}
            className="rounded-lg shadow-lg bg-black"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover rounded-lg"
              style={{ border: 0 }}
            ></iframe>
          </AspectRatio>
        ))}
      </div>
    </section>
  );
}
