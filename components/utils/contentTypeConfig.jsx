export const contentTypeConfig = (contentType) => {
  switch (contentType) {
    case "latest" || "press_release" || "story" || "research":
      return "news";

    case "ongoing" || "completed" || "coming_soon":
      return "project";
    default:
      return null;
  }
};
