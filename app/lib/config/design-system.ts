export const DESIGN_SYSTEM = {
  layout: {
    maxWidth: "max-w-7xl",
    sectionSpacing: "py-16 md:py-20",
    containerPadding: "px-6",
  },

  borderRadius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    full: "rounded-full",
  },

  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  },

  transition: {
    default: "transition-all duration-200",
  },

  colors: {
    primary: "blue-600",
    success: "green-600",
    warning: "amber-500",
    danger: "red-600",
  },
} as const;