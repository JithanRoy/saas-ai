'use client';

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsArrowRight, BsCameraVideoFill, BsCodeSlash, BsFillFileEarmarkMusicFill, BsFillImageFill } from "react-icons/bs";

export const tools = [
  {
    label: 'Conversation',
    icon: BiSolidMessageSquareDetail,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Music Generation',
    icon:  BsFillFileEarmarkMusicFill,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Image Generation',
    icon: BsFillImageFill,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: BsCameraVideoFill,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon:   BsCodeSlash,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];

export default function HomePage () {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Explore the power of AI
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Chat with the smartest AI - Experience the power of AI
          </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
              <Card 
              onClick={() => router.push(tool.href)} 
              key={tool.href} 
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                  <div className="flex items-center gap-x-4">
                      <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                          <tool.icon className={cn("w-8 h-8", tool.color)} />
                      </div>
                      <div className="font-semibold">
                          {tool.label}
                      </div>
                  </div>
                  <BsArrowRight className="w-5 h-5" />
              </Card>
          ))}
      </div>
    </>
  )
}
