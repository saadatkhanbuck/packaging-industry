import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
     <OrbitingCircles iconSize={40}>
  <Icons.twitter />
  <Icons.linkedin />
  <Icons.instagram />
  <Icons.youtube />
  <Icons.twitter />
</OrbitingCircles>
<OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
  <Icons.twitter />
  <Icons.linkedin />
  <Icons.instagram />
  <Icons.youtube />
</OrbitingCircles>

    </div>
  );
}

const Icons = {
  twitter: () => (
    <svg viewBox="0 0 24 24" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="twitter-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#124576" />
          <stop offset="100%" stopColor="#2E8AE0" />
        </linearGradient>
      </defs>
      <path
        d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.8a4.27 4.27 0 001.32 5.71 4.24 4.24 0 01-1.94-.53v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.65 8.65 0 0024 5.56a8.56 8.56 0 01-2.54.7z"
        fill="url(#twitter-gradient)"
      />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="linkedin-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#124576" />
          <stop offset="100%" stopColor="#2E8AE0" />
        </linearGradient>
      </defs>
      <path
        d="M4.98 3.5A2.5 2.5 0 007.5 6a2.5 2.5 0 11-5 0A2.5 2.5 0 004.98 3.5zM3 8h4v12H3zm7 0h3.6v1.71h.05a4 4 0 013.6-2c3.85 0 4.56 2.53 4.56 5.82V20h-4v-5.35c0-1.27-.02-2.9-1.77-2.9s-2.05 1.38-2.05 2.8V20h-4z"
        fill="url(#linkedin-gradient)"
      />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#124576" />
          <stop offset="100%" stopColor="#2E8AE0" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.248 2.415.415.57.21.98.462 1.41.892.43.43.68.84.892 1.41.166.456.358 1.244.415 2.415.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.248 1.96-.415 2.415a4.01 4.01 0 01-.892 1.41 4.01 4.01 0 01-1.41.892c-.456.166-1.244.358-2.415.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.248-2.415-.415a4.01 4.01 0 01-1.41-.892 4.01 4.01 0 01-.892-1.41c-.166-.456-.358-1.244-.415-2.415C2.212 15.784 2.2 15.4 2.2 12.2s.012-3.584.07-4.85c.056-1.17.248-1.96.415-2.415a4.01 4.01 0 01.892-1.41 4.01 4.01 0 011.41-.892c.456-.166 1.244-.358 2.415-.415C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.518.012-4.75.068-.928.045-1.43.198-1.763.33a2.26 2.26 0 00-.818.534 2.26 2.26 0 00-.534.818c-.132.333-.285.835-.33 1.763-.056 1.232-.068 1.6-.068 4.75s.012 3.518.068 4.75c.045.928.198 1.43.33 1.763.122.31.29.592.534.818.226.244.508.412.818.534.333.132.835.285 1.763.33 1.232.056 1.6.068 4.75.068s3.518-.012 4.75-.068c.928-.045 1.43-.198 1.763-.33.31-.122.592-.29.818-.534.244-.226.412-.508.534-.818.132-.333.285-.835.33-1.763.056-1.232.068-1.6.068-4.75s-.012-3.518-.068-4.75c-.045-.928-.198-1.43-.33-1.763a2.26 2.26 0 00-.534-.818 2.26 2.26 0 00-.818-.534c-.333-.132-.835-.285-1.763-.33-1.232-.056-1.6-.068-4.75-.068zM12 7.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm0 1.8a3 3 0 100 6 3 3 0 000-6zm5.7-.9a1.08 1.08 0 110 2.16 1.08 1.08 0 010-2.16z"
        fill="url(#instagram-gradient)"
      />
    </svg>
  ),
  youtube: () => (
  <svg viewBox="0 0 24 24" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="youtube-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#124576" />
        <stop offset="100%" stopColor="#2E8AE0" />
      </linearGradient>
    </defs>
    <path
      d="M10 15l5.19-3L10 9v6zm12-3c0-2.04-.07-3.73-.21-5.06-.14-1.33-.6-2.4-1.35-3.15a4.61 4.61 0 00-3.14-1.34C15.57 2.3 12 2.3 12 2.3s-3.57 0-5.3.15a4.61 4.61 0 00-3.14 1.34c-.75.75-1.21 1.82-1.35 3.15C2.07 8.27 2 9.96 2 12c0 2.04.07 3.73.21 5.06.14 1.33.6 2.4 1.35 3.15.75.75 1.82 1.21 3.15 1.35 1.33.14 3.02.21 5.06.21s3.73-.07 5.06-.21c1.33-.14 2.4-.6 3.15-1.35.75-.75 1.21-1.82 1.35-3.15.14-1.33.21-3.02.21-5.06z"
      fill="none"
      stroke="url(#youtube-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
),

};


