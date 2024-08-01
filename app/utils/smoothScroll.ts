type SmoothScrollProps = {
  sectionId: string;
  scrollBehavior?: ScrollBehavior;
};
export default function smoothScroll({
  sectionId,
  scrollBehavior = "smooth",
}: SmoothScrollProps) {
  const scrollTo = document.getElementById(sectionId);
  if (scrollTo) {
    scrollTo.scrollIntoView({ behavior: scrollBehavior });
  }
}
