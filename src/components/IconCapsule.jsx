import IconCloud from "./IconCloud";
 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "materialui",
  "mysql",
  "bootstrap",
  "vercel",
  "mongodb",
  "cloudinary",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
];
 
export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}