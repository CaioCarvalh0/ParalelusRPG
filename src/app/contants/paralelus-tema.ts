import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const Tema = definePreset(Aura, definePreset(Aura, {
  primitive: {
      borderRadius: {
          none: "0",
          xs: "2px",
          sm: "4px",
          md: "4px",
          lg: "8px",
          xl: "12px"
      },
      emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22"
      },
      green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16"
      },
      lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
          950: "#1a2e05"
      },
      red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a"
      },
      orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407"
      },
      amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03"
      },
      yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006"
      },
      teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e"
      },
      cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344"
      },
      sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49"
      },
      blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
      },
      indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b"
      },
      violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065"
      },
      purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764"
      },
      fuchsia: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e"
      },
      pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724"
      },
      rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519"
      },
      slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
      },
      gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712"
      },
      zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b"
      },
      neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a"
      },
      stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09"
      }
  },
  semantic: {
      transitionDuration: "0.2s",
      focusRing: {
          width: "1px",
          style: "solid",
          color: "{primary.color}",
          offset: "2px",
          shadow: "none"
      },
      disabledOpacity: "0.6",
      iconSize: "1rem",
      anchorGutter: "2px",
      primary: {
          50: "#fff3f7",
          100: "#ffc7d7",
          200: "#ff9ab7",
          300: "#ff6d97",
          400: "#ff4177",
          500: "#ff1457",
          600: "#d9114a",
          700: "#b30e3d",
          800: "#8c0b30",
          900: "#660823",
          950: "#400516"
      },
      formField: {
          paddingX: "0.75rem",
          paddingY: "0.5rem",
          sm: {
              fontSize: "0.875rem",
              paddingX: "0.625rem",
              paddingY: "0.375rem"
          },
          lg: {
              fontSize: "1.125rem",
              paddingX: "0.875rem",
              paddingY: "0.625rem"
          },
          borderRadius: "{border.radius.md}",
          focusRing: {
              width: "0",
              style: "none",
              color: "transparent",
              offset: "0",
              shadow: "none"
          },
          transitionDuration: "{transition.duration}"
      },
      list: {
          padding: "0.25rem 0.25rem",
          gap: "2px",
          header: {
              padding: "0.5rem 1rem 0.25rem 1rem"
          },
          option: {
              padding: "0.5rem 0.75rem",
              borderRadius: "{border.radius.sm}"
          },
          optionGroup: {
              padding: "0.5rem 0.75rem",
              fontWeight: "600"
          }
      },
      content: {
          borderRadius: "{border.radius.md}"
      },
      mask: {
          transitionDuration: "0.15s"
      },
      navigation: {
          list: {
              padding: "0.25rem 0.25rem",
              gap: "2px"
          },
          item: {
              padding: "0.5rem 0.75rem",
              borderRadius: "{border.radius.sm}",
              gap: "0.5rem"
          },
          submenuLabel: {
              padding: "0.5rem 0.75rem",
              fontWeight: "600"
          },
          submenuIcon: {
              size: "0.875rem"
          }
      },
      overlay: {
          select: {
              borderRadius: "{border.radius.md}",
              shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
          },
          popover: {
              borderRadius: "{border.radius.md}",
              padding: "0.75rem",
              shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
          },
          modal: {
              borderRadius: "{border.radius.xl}",
              padding: "1.25rem",
              shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          },
          navigation: {
              shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
          }
      },
      colorScheme: {
          light: {
              surface: {
                  0: "#ffffff",
                  50: "#f6f5f6",
                  100: "#d2cfd2",
                  200: "#afa9af",
                  300: "#8c838c",
                  400: "#685d68",
                  500: "#453745",
                  600: "#3b2f3b",
                  700: "#302730",
                  800: "#261e26",
                  900: "#1c161c",
                  950: "#110e11"
              },
              primary: {
                  color: "{primary.500}",
                  contrastColor: "#ffffff",
                  hoverColor: "{primary.600}",
                  activeColor: "{primary.700}"
              },
              highlight: {
                  background: "{primary.50}",
                  focusBackground: "{primary.100}",
                  color: "{primary.700}",
                  focusColor: "{primary.800}"
              },
              mask: {
                  background: "rgba(0,0,0,0.4)",
                  color: "{surface.200}"
              },
              formField: {
                  background: "{surface.0}",
                  disabledBackground: "{surface.200}",
                  filledBackground: "{surface.50}",
                  filledHoverBackground: "{surface.50}",
                  filledFocusBackground: "{surface.50}",
                  borderColor: "{surface.300}",
                  hoverBorderColor: "{surface.400}",
                  focusBorderColor: "{primary.color}",
                  invalidBorderColor: "{red.400}",
                  color: "{surface.700}",
                  disabledColor: "{surface.500}",
                  placeholderColor: "{surface.500}",
                  invalidPlaceholderColor: "{red.600}",
                  floatLabelColor: "{surface.500}",
                  floatLabelFocusColor: "{primary.600}",
                  floatLabelActiveColor: "{surface.500}",
                  floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                  iconColor: "{surface.400}",
                  shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
              },
              text: {
                  color: "{surface.700}",
                  hoverColor: "{surface.800}",
                  mutedColor: "{surface.500}",
                  hoverMutedColor: "{surface.600}"
              },
              content: {
                  background: "{surface.0}",
                  hoverBackground: "{surface.100}",
                  borderColor: "{surface.200}",
                  color: "{text.color}",
                  hoverColor: "{text.hover.color}"
              },
              overlay: {
                  select: {
                      background: "{surface.0}",
                      borderColor: "{surface.200}",
                      color: "{text.color}"
                  },
                  popover: {
                      background: "{surface.0}",
                      borderColor: "{surface.200}",
                      color: "{text.color}"
                  },
                  modal: {
                      background: "{surface.0}",
                      borderColor: "{surface.200}",
                      color: "{text.color}"
                  }
              },
              list: {
                  option: {
                      focusBackground: "{surface.100}",
                      selectedBackground: "{highlight.background}",
                      selectedFocusBackground: "{highlight.focus.background}",
                      color: "{text.color}",
                      focusColor: "{text.hover.color}",
                      selectedColor: "{highlight.color}",
                      selectedFocusColor: "{highlight.focus.color}",
                      icon: {
                          color: "{surface.400}",
                          focusColor: "{surface.500}"
                      }
                  },
                  optionGroup: {
                      background: "transparent",
                      color: "{text.muted.color}"
                  }
              },
              navigation: {
                  item: {
                      focusBackground: "{surface.100}",
                      activeBackground: "{surface.100}",
                      color: "{text.color}",
                      focusColor: "{text.hover.color}",
                      activeColor: "{text.hover.color}",
                      icon: {
                          color: "{surface.400}",
                          focusColor: "{surface.500}",
                          activeColor: "{surface.500}"
                      }
                  },
                  submenuLabel: {
                      background: "transparent",
                      color: "{text.muted.color}"
                  },
                  submenuIcon: {
                      color: "{surface.400}",
                      focusColor: "{surface.500}",
                      activeColor: "{surface.500}"
                  }
              }
          },
          dark: {
              surface: {
                  0: "#ffffff",
                  50: "#fafafa",
                  100: "#f4f4f5",
                  200: "#e4e4e7",
                  300: "#d4d4d8",
                  400: "#a1a1aa",
                  500: "#71717a",
                  600: "#52525b",
                  700: "#3f3f46",
                  800: "#27272a",
                  900: "#18181b",
                  950: "#09090b"
              },
              primary: {
                  color: "{primary.400}",
                  contrastColor: "{surface.900}",
                  hoverColor: "{primary.300}",
                  activeColor: "{primary.200}"
              },
              highlight: {
                  background: "color-mix(in srgb, {primary.400}, transparent 84%)",
                  focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
                  color: "rgba(255,255,255,.87)",
                  focusColor: "rgba(255,255,255,.87)"
              },
              mask: {
                  background: "rgba(0,0,0,0.6)",
                  color: "{surface.200}"
              },
              formField: {
                  background: "{surface.950}",
                  disabledBackground: "{surface.700}",
                  filledBackground: "{surface.800}",
                  filledHoverBackground: "{surface.800}",
                  filledFocusBackground: "{surface.800}",
                  borderColor: "{surface.600}",
                  hoverBorderColor: "{surface.500}",
                  focusBorderColor: "{primary.color}",
                  invalidBorderColor: "{red.300}",
                  color: "{surface.0}",
                  disabledColor: "{surface.400}",
                  placeholderColor: "{surface.400}",
                  invalidPlaceholderColor: "{red.400}",
                  floatLabelColor: "{surface.400}",
                  floatLabelFocusColor: "{primary.color}",
                  floatLabelActiveColor: "{surface.400}",
                  floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                  iconColor: "{surface.400}",
                  shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
              },
              text: {
                  color: "{surface.0}",
                  hoverColor: "{surface.0}",
                  mutedColor: "{surface.400}",
                  hoverMutedColor: "{surface.300}"
              },
              content: {
                  background: "{surface.900}",
                  hoverBackground: "{surface.800}",
                  borderColor: "{surface.700}",
                  color: "{text.color}",
                  hoverColor: "{text.hover.color}"
              },
              overlay: {
                  select: {
                      background: "{surface.900}",
                      borderColor: "{surface.700}",
                      color: "{text.color}"
                  },
                  popover: {
                      background: "{surface.900}",
                      borderColor: "{surface.700}",
                      color: "{text.color}"
                  },
                  modal: {
                      background: "{surface.900}",
                      borderColor: "{surface.700}",
                      color: "{text.color}"
                  }
              },
              list: {
                  option: {
                      focusBackground: "{surface.800}",
                      selectedBackground: "{highlight.background}",
                      selectedFocusBackground: "{highlight.focus.background}",
                      color: "{text.color}",
                      focusColor: "{text.hover.color}",
                      selectedColor: "{highlight.color}",
                      selectedFocusColor: "{highlight.focus.color}",
                      icon: {
                          color: "{surface.500}",
                          focusColor: "{surface.400}"
                      }
                  },
                  optionGroup: {
                      background: "transparent",
                      color: "{text.muted.color}"
                  }
              },
              navigation: {
                  item: {
                      focusBackground: "{surface.800}",
                      activeBackground: "{surface.800}",
                      color: "{text.color}",
                      focusColor: "{text.hover.color}",
                      activeColor: "{text.hover.color}",
                      icon: {
                          color: "{surface.500}",
                          focusColor: "{surface.400}",
                          activeColor: "{surface.400}"
                      }
                  },
                  submenuLabel: {
                      background: "transparent",
                      color: "{text.muted.color}"
                  },
                  submenuIcon: {
                      color: "{surface.500}",
                      focusColor: "{surface.400}",
                      activeColor: "{surface.400}"
                  }
              }
          }
      }
  },
  components: {
      accordion: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          panel: {
              borderWidth: "0 0 1px 0",
              borderColor: "{content.border.color}"
          },
          header: {
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              activeColor: "{text.color}",
              padding: "1.125rem",
              fontWeight: "600",
              borderRadius: "0",
              borderWidth: "0",
              borderColor: "{content.border.color}",
              background: "{content.background}",
              hoverBackground: "{content.background}",
              activeBackground: "{content.background}",
              activeHoverBackground: "{content.background}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              },
              toggleIcon: {
                  color: "{text.muted.color}",
                  hoverColor: "{text.color}",
                  activeColor: "{text.color}",
                  activeHoverColor: "{text.color}"
              },
              first: {
                  topBorderRadius: "{content.border.radius}",
                  borderWidth: "0"
              },
              last: {
                  bottomBorderRadius: "{content.border.radius}",
                  activeBottomBorderRadius: "0"
              }
          },
          content: {
              borderWidth: "0",
              borderColor: "{content.border.color}",
              background: "{content.background}",
              color: "{text.color}",
              padding: "0 1.125rem 1.125rem 1.125rem"
          }
      },
      autocomplete: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledHoverBackground: "{form.field.filled.hover.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}"
          },
          overlay: {
              background: "{overlay.select.background}",
              borderColor: "{overlay.select.border.color}",
              borderRadius: "{overlay.select.border.radius}",
              color: "{overlay.select.color}",
              shadow: "{overlay.select.shadow}"
          },
          list: {
              padding: "{list.padding}",
              gap: "{list.gap}"
          },
          option: {
              focusBackground: "{list.option.focus.background}",
              selectedBackground: "{list.option.selected.background}",
              selectedFocusBackground: "{list.option.selected.focus.background}",
              color: "{list.option.color}",
              focusColor: "{list.option.focus.color}",
              selectedColor: "{list.option.selected.color}",
              selectedFocusColor: "{list.option.selected.focus.color}",
              padding: "{list.option.padding}",
              borderRadius: "{list.option.border.radius}"
          },
          optionGroup: {
              background: "{list.option.group.background}",
              color: "{list.option.group.color}",
              fontWeight: "{list.option.group.font.weight}",
              padding: "{list.option.group.padding}"
          },
          dropdown: {
              width: "2.5rem",
              sm: {
                  width: "2rem"
              },
              lg: {
                  width: "3rem"
              },
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.border.color}",
              activeBorderColor: "{form.field.border.color}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          chip: {
              borderRadius: "{border.radius.sm}"
          },
          emptyMessage: {
              padding: "{list.option.padding}"
          },
          colorScheme: {
              light: {
                  chip: {
                      focusBackground: "{surface.200}",
                      focusColor: "{surface.800}"
                  },
                  dropdown: {
                      background: "{surface.100}",
                      hoverBackground: "{surface.200}",
                      activeBackground: "{surface.300}",
                      color: "{surface.600}",
                      hoverColor: "{surface.700}",
                      activeColor: "{surface.800}"
                  }
              },
              dark: {
                  chip: {
                      focusBackground: "{surface.700}",
                      focusColor: "{surface.0}"
                  },
                  dropdown: {
                      background: "{surface.800}",
                      hoverBackground: "{surface.700}",
                      activeBackground: "{surface.600}",
                      color: "{surface.300}",
                      hoverColor: "{surface.200}",
                      activeColor: "{surface.100}"
                  }
              }
          }
      },
      avatar: {
          root: {
              width: "2rem",
              height: "2rem",
              fontSize: "1rem",
              background: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}"
          },
          icon: {
              size: "1rem"
          },
          group: {
              borderColor: "{content.background}",
              offset: "-0.75rem"
          },
          lg: {
              width: "3rem",
              height: "3rem",
              fontSize: "1.5rem",
              icon: {
                  size: "1.5rem"
              },
              group: {
                  offset: "-1rem"
              }
          },
          xl: {
              width: "4rem",
              height: "4rem",
              fontSize: "2rem",
              icon: {
                  size: "2rem"
              },
              group: {
                  offset: "-1.5rem"
              }
          }
      },
      badge: {
          root: {
              borderRadius: "{border.radius.md}",
              padding: "0 0.5rem",
              fontSize: "0.75rem",
              fontWeight: "700",
              minWidth: "1.5rem",
              height: "1.5rem"
          },
          dot: {
              size: "0.5rem"
          },
          sm: {
              fontSize: "0.625rem",
              minWidth: "1.25rem",
              height: "1.25rem"
          },
          lg: {
              fontSize: "0.875rem",
              minWidth: "1.75rem",
              height: "1.75rem"
          },
          xl: {
              fontSize: "1rem",
              minWidth: "2rem",
              height: "2rem"
          },
          colorScheme: {
              light: {
                  primary: {
                      background: "{primary.color}",
                      color: "{primary.contrast.color}"
                  },
                  secondary: {
                      background: "{surface.100}",
                      color: "{surface.600}"
                  },
                  success: {
                      background: "{green.500}",
                      color: "{surface.0}"
                  },
                  info: {
                      background: "{sky.500}",
                      color: "{surface.0}"
                  },
                  warn: {
                      background: "{orange.500}",
                      color: "{surface.0}"
                  },
                  danger: {
                      background: "{red.500}",
                      color: "{surface.0}"
                  },
                  contrast: {
                      background: "{surface.950}",
                      color: "{surface.0}"
                  }
              },
              dark: {
                  primary: {
                      background: "{primary.color}",
                      color: "{primary.contrast.color}"
                  },
                  secondary: {
                      background: "{surface.800}",
                      color: "{surface.300}"
                  },
                  success: {
                      background: "{green.400}",
                      color: "{green.950}"
                  },
                  info: {
                      background: "{sky.400}",
                      color: "{sky.950}"
                  },
                  warn: {
                      background: "{orange.400}",
                      color: "{orange.950}"
                  },
                  danger: {
                      background: "{red.400}",
                      color: "{red.950}"
                  },
                  contrast: {
                      background: "{surface.0}",
                      color: "{surface.950}"
                  }
              }
          }
      },
      blockui: {
          root: {
              borderRadius: "{content.border.radius}"
          }
      },
      breadcrumb: {
          root: {
              padding: "1rem",
              background: "{content.background}",
              gap: "0.5rem",
              transitionDuration: "{transition.duration}"
          },
          item: {
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              borderRadius: "{content.border.radius}",
              gap: "{navigation.item.gap}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  hoverColor: "{navigation.item.icon.focus.color}"
              },
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          separator: {
              color: "{navigation.item.icon.color}"
          }
      },
      button: {
          root: {
              borderRadius: "{form.field.border.radius}",
              roundedBorderRadius: "2rem",
              gap: "0.5rem",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              iconOnlyWidth: "2.5rem",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              },
              label: {
                  fontWeight: "500"
              },
              raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  offset: "{focus.ring.offset}"
              },
              badgeSize: "1rem",
              transitionDuration: "{form.field.transition.duration}"
          },
          colorScheme: {
              light: {
                  root: {
                      primary: {
                          background: "{primary.color}",
                          hoverBackground: "{primary.hover.color}",
                          activeBackground: "{primary.active.color}",
                          borderColor: "{primary.color}",
                          hoverBorderColor: "{primary.hover.color}",
                          activeBorderColor: "{primary.active.color}",
                          color: "{primary.contrast.color}",
                          hoverColor: "{primary.contrast.color}",
                          activeColor: "{primary.contrast.color}",
                          focusRing: {
                              color: "{primary.color}",
                              shadow: "none"
                          }
                      },
                      secondary: {
                          background: "{surface.100}",
                          hoverBackground: "{surface.200}",
                          activeBackground: "{surface.300}",
                          borderColor: "{surface.100}",
                          hoverBorderColor: "{surface.200}",
                          activeBorderColor: "{surface.300}",
                          color: "{surface.600}",
                          hoverColor: "{surface.700}",
                          activeColor: "{surface.800}",
                          focusRing: {
                              color: "{surface.600}",
                              shadow: "none"
                          }
                      },
                      info: {
                          background: "{sky.500}",
                          hoverBackground: "{sky.600}",
                          activeBackground: "{sky.700}",
                          borderColor: "{sky.500}",
                          hoverBorderColor: "{sky.600}",
                          activeBorderColor: "{sky.700}",
                          color: "#ffffff",
                          hoverColor: "#ffffff",
                          activeColor: "#ffffff",
                          focusRing: {
                              color: "{sky.500}",
                              shadow: "none"
                          }
                      },
                      success: {
                          background: "{green.500}",
                          hoverBackground: "{green.600}",
                          activeBackground: "{green.700}",
                          borderColor: "{green.500}",
                          hoverBorderColor: "{green.600}",
                          activeBorderColor: "{green.700}",
                          color: "#ffffff",
                          hoverColor: "#ffffff",
                          activeColor: "#ffffff",
                          focusRing: {
                              color: "{green.500}",
                              shadow: "none"
                          }
                      },
                      warn: {
                          background: "{orange.500}",
                          hoverBackground: "{orange.600}",
                          activeBackground: "{orange.700}",
                          borderColor: "{orange.500}",
                          hoverBorderColor: "{orange.600}",
                          activeBorderColor: "{orange.700}",
                          color: "#ffffff",
                          hoverColor: "#ffffff",
                          activeColor: "#ffffff",
                          focusRing: {
                              color: "{orange.500}",
                              shadow: "none"
                          }
                      },
                      help: {
                          background: "{purple.500}",
                          hoverBackground: "{purple.600}",
                          activeBackground: "{purple.700}",
                          borderColor: "{purple.500}",
                          hoverBorderColor: "{purple.600}",
                          activeBorderColor: "{purple.700}",
                          color: "#ffffff",
                          hoverColor: "#ffffff",
                          activeColor: "#ffffff",
                          focusRing: {
                              color: "{purple.500}",
                              shadow: "none"
                          }
                      },
                      danger: {
                          background: "{red.500}",
                          hoverBackground: "{red.600}",
                          activeBackground: "{red.700}",
                          borderColor: "{red.500}",
                          hoverBorderColor: "{red.600}",
                          activeBorderColor: "{red.700}",
                          color: "#ffffff",
                          hoverColor: "#ffffff",
                          activeColor: "#ffffff",
                          focusRing: {
                              color: "{red.500}",
                              shadow: "none"
                          }
                      },
                      contrast: {
                          background: "{surface.950}",
                          hoverBackground: "{surface.900}",
                          activeBackground: "{surface.800}",
                          borderColor: "{surface.950}",
                          hoverBorderColor: "{surface.900}",
                          activeBorderColor: "{surface.800}",
                          color: "{surface.0}",
                          hoverColor: "{surface.0}",
                          activeColor: "{surface.0}",
                          focusRing: {
                              color: "{surface.950}",
                              shadow: "none"
                          }
                      }
                  },
                  outlined: {
                      primary: {
                          hoverBackground: "{primary.50}",
                          activeBackground: "{primary.100}",
                          borderColor: "{primary.200}",
                          color: "{primary.color}"
                      },
                      secondary: {
                          hoverBackground: "{surface.50}",
                          activeBackground: "{surface.100}",
                          borderColor: "{surface.200}",
                          color: "{surface.500}"
                      },
                      success: {
                          hoverBackground: "{green.50}",
                          activeBackground: "{green.100}",
                          borderColor: "{green.200}",
                          color: "{green.500}"
                      },
                      info: {
                          hoverBackground: "{sky.50}",
                          activeBackground: "{sky.100}",
                          borderColor: "{sky.200}",
                          color: "{sky.500}"
                      },
                      warn: {
                          hoverBackground: "{orange.50}",
                          activeBackground: "{orange.100}",
                          borderColor: "{orange.200}",
                          color: "{orange.500}"
                      },
                      help: {
                          hoverBackground: "{purple.50}",
                          activeBackground: "{purple.100}",
                          borderColor: "{purple.200}",
                          color: "{purple.500}"
                      },
                      danger: {
                          hoverBackground: "{red.50}",
                          activeBackground: "{red.100}",
                          borderColor: "{red.200}",
                          color: "{red.500}"
                      },
                      contrast: {
                          hoverBackground: "{surface.50}",
                          activeBackground: "{surface.100}",
                          borderColor: "{surface.700}",
                          color: "{surface.950}"
                      },
                      plain: {
                          hoverBackground: "{surface.50}",
                          activeBackground: "{surface.100}",
                          borderColor: "{surface.200}",
                          color: "{surface.700}"
                      }
                  },
                  text: {
                      primary: {
                          hoverBackground: "{primary.50}",
                          activeBackground: "{primary.100}",
                          color: "{primary.color}"
                      },
                      secondary: {
                          hoverBackground: "{surface.50}",
                          activeBackground: "{surface.100}",
                          color: "{surface.500}"
                      },
                      success: {
                          hoverBackground: "{green.50}",
                          activeBackground: "{green.100}",
                          color: "{green.500}"
                      },
                      info: {
                          hoverBackground: "{sky.50}",
                          activeBackground: "{sky.100}",
                          color: "{sky.500}"
                      },
                      warn: {
                          hoverBackground: "{orange.50}",
                          activeBackground: "{orange.100}",
                          color: "{orange.500}"
                      },
                      help: {
                          hoverBackground: "{purple.50}",
                          activeBackground: "{purple.100}",
                          color: "{purple.500}"
                      },
                      danger: {
                          hoverBackground: "{red.50}",
                          activeBackground: "{red.100}",
                          color: "{red.500}"
                      },
                      contrast: {
                          hoverBackground: "{surface.50}",
                          activeBackground: "{surface.100}",
                          color: "{surface.950}"
                      },
                      plain: {
                          hoverBackground: "{surface.50}",
                          activeBackground: "{surface.100}",
                          color: "{surface.700}"
                      }
                  },
                  link: {
                      color: "{primary.color}",
                      hoverColor: "{primary.color}",
                      activeColor: "{primary.color}"
                  }
              },
              dark: {
                  root: {
                      primary: {
                          background: "{primary.color}",
                          hoverBackground: "{primary.hover.color}",
                          activeBackground: "{primary.active.color}",
                          borderColor: "{primary.color}",
                          hoverBorderColor: "{primary.hover.color}",
                          activeBorderColor: "{primary.active.color}",
                          color: "{primary.contrast.color}",
                          hoverColor: "{primary.contrast.color}",
                          activeColor: "{primary.contrast.color}",
                          focusRing: {
                              color: "{primary.color}",
                              shadow: "none"
                          }
                      },
                      secondary: {
                          background: "{surface.800}",
                          hoverBackground: "{surface.700}",
                          activeBackground: "{surface.600}",
                          borderColor: "{surface.800}",
                          hoverBorderColor: "{surface.700}",
                          activeBorderColor: "{surface.600}",
                          color: "{surface.300}",
                          hoverColor: "{surface.200}",
                          activeColor: "{surface.100}",
                          focusRing: {
                              color: "{surface.300}",
                              shadow: "none"
                          }
                      },
                      info: {
                          background: "{sky.400}",
                          hoverBackground: "{sky.300}",
                          activeBackground: "{sky.200}",
                          borderColor: "{sky.400}",
                          hoverBorderColor: "{sky.300}",
                          activeBorderColor: "{sky.200}",
                          color: "{sky.950}",
                          hoverColor: "{sky.950}",
                          activeColor: "{sky.950}",
                          focusRing: {
                              color: "{sky.400}",
                              shadow: "none"
                          }
                      },
                      success: {
                          background: "{green.400}",
                          hoverBackground: "{green.300}",
                          activeBackground: "{green.200}",
                          borderColor: "{green.400}",
                          hoverBorderColor: "{green.300}",
                          activeBorderColor: "{green.200}",
                          color: "{green.950}",
                          hoverColor: "{green.950}",
                          activeColor: "{green.950}",
                          focusRing: {
                              color: "{green.400}",
                              shadow: "none"
                          }
                      },
                      warn: {
                          background: "{orange.400}",
                          hoverBackground: "{orange.300}",
                          activeBackground: "{orange.200}",
                          borderColor: "{orange.400}",
                          hoverBorderColor: "{orange.300}",
                          activeBorderColor: "{orange.200}",
                          color: "{orange.950}",
                          hoverColor: "{orange.950}",
                          activeColor: "{orange.950}",
                          focusRing: {
                              color: "{orange.400}",
                              shadow: "none"
                          }
                      },
                      help: {
                          background: "{purple.400}",
                          hoverBackground: "{purple.300}",
                          activeBackground: "{purple.200}",
                          borderColor: "{purple.400}",
                          hoverBorderColor: "{purple.300}",
                          activeBorderColor: "{purple.200}",
                          color: "{purple.950}",
                          hoverColor: "{purple.950}",
                          activeColor: "{purple.950}",
                          focusRing: {
                              color: "{purple.400}",
                              shadow: "none"
                          }
                      },
                      danger: {
                          background: "{red.400}",
                          hoverBackground: "{red.300}",
                          activeBackground: "{red.200}",
                          borderColor: "{red.400}",
                          hoverBorderColor: "{red.300}",
                          activeBorderColor: "{red.200}",
                          color: "{red.950}",
                          hoverColor: "{red.950}",
                          activeColor: "{red.950}",
                          focusRing: {
                              color: "{red.400}",
                              shadow: "none"
                          }
                      },
                      contrast: {
                          background: "{surface.0}",
                          hoverBackground: "{surface.100}",
                          activeBackground: "{surface.200}",
                          borderColor: "{surface.0}",
                          hoverBorderColor: "{surface.100}",
                          activeBorderColor: "{surface.200}",
                          color: "{surface.950}",
                          hoverColor: "{surface.950}",
                          activeColor: "{surface.950}",
                          focusRing: {
                              color: "{surface.0}",
                              shadow: "none"
                          }
                      }
                  },
                  outlined: {
                      primary: {
                          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
                          borderColor: "{primary.700}",
                          color: "{primary.color}"
                      },
                      secondary: {
                          hoverBackground: "rgba(255,255,255,0.04)",
                          activeBackground: "rgba(255,255,255,0.16)",
                          borderColor: "{surface.700}",
                          color: "{surface.400}"
                      },
                      success: {
                          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
                          borderColor: "{green.700}",
                          color: "{green.400}"
                      },
                      info: {
                          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
                          borderColor: "{sky.700}",
                          color: "{sky.400}"
                      },
                      warn: {
                          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
                          borderColor: "{orange.700}",
                          color: "{orange.400}"
                      },
                      help: {
                          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
                          borderColor: "{purple.700}",
                          color: "{purple.400}"
                      },
                      danger: {
                          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
                          borderColor: "{red.700}",
                          color: "{red.400}"
                      },
                      contrast: {
                          hoverBackground: "{surface.800}",
                          activeBackground: "{surface.700}",
                          borderColor: "{surface.500}",
                          color: "{surface.0}"
                      },
                      plain: {
                          hoverBackground: "{surface.800}",
                          activeBackground: "{surface.700}",
                          borderColor: "{surface.600}",
                          color: "{surface.0}"
                      }
                  },
                  text: {
                      primary: {
                          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
                          color: "{primary.color}"
                      },
                      secondary: {
                          hoverBackground: "{surface.800}",
                          activeBackground: "{surface.700}",
                          color: "{surface.400}"
                      },
                      success: {
                          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
                          color: "{green.400}"
                      },
                      info: {
                          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
                          color: "{sky.400}"
                      },
                      warn: {
                          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
                          color: "{orange.400}"
                      },
                      help: {
                          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
                          color: "{purple.400}"
                      },
                      danger: {
                          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
                          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
                          color: "{red.400}"
                      },
                      contrast: {
                          hoverBackground: "{surface.800}",
                          activeBackground: "{surface.700}",
                          color: "{surface.0}"
                      },
                      plain: {
                          hoverBackground: "{surface.800}",
                          activeBackground: "{surface.700}",
                          color: "{surface.0}"
                      }
                  },
                  link: {
                      color: "{primary.color}",
                      hoverColor: "{primary.color}",
                      activeColor: "{primary.color}"
                  }
              }
          }
      },
      datepicker: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          panel: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}",
              shadow: "{overlay.popover.shadow}",
              padding: "{overlay.popover.padding}"
          },
          header: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              padding: "0 0 0.5rem 0"
          },
          title: {
              gap: "0.5rem",
              fontWeight: "500"
          },
          dropdown: {
              width: "2.5rem",
              sm: {
                  width: "2rem"
              },
              lg: {
                  width: "3rem"
              },
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.border.color}",
              activeBorderColor: "{form.field.border.color}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          inputIcon: {
              color: "{form.field.icon.color}"
          },
          selectMonth: {
              hoverBackground: "{content.hover.background}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              padding: "0.25rem 0.5rem",
              borderRadius: "{content.border.radius}"
          },
          selectYear: {
              hoverBackground: "{content.hover.background}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              padding: "0.25rem 0.5rem",
              borderRadius: "{content.border.radius}"
          },
          group: {
              borderColor: "{content.border.color}",
              gap: "{overlay.popover.padding}"
          },
          dayView: {
              margin: "0.5rem 0 0 0"
          },
          weekDay: {
              padding: "0.25rem",
              fontWeight: "500",
              color: "{content.color}"
          },
          date: {
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{primary.color}",
              rangeSelectedBackground: "{highlight.background}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              selectedColor: "{primary.contrast.color}",
              rangeSelectedColor: "{highlight.color}",
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              padding: "0.25rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          monthView: {
              margin: "0.5rem 0 0 0"
          },
          month: {
              padding: "0.375rem",
              borderRadius: "{content.border.radius}"
          },
          yearView: {
              margin: "0.5rem 0 0 0"
          },
          year: {
              padding: "0.375rem",
              borderRadius: "{content.border.radius}"
          },
          buttonbar: {
              padding: "0.5rem 0 0 0",
              borderColor: "{content.border.color}"
          },
          timePicker: {
              padding: "0.5rem 0 0 0",
              borderColor: "{content.border.color}",
              gap: "0.5rem",
              buttonGap: "0.25rem"
          },
          colorScheme: {
              light: {
                  dropdown: {
                      background: "{surface.100}",
                      hoverBackground: "{surface.200}",
                      activeBackground: "{surface.300}",
                      color: "{surface.600}",
                      hoverColor: "{surface.700}",
                      activeColor: "{surface.800}"
                  },
                  today: {
                      background: "{surface.200}",
                      color: "{surface.900}"
                  }
              },
              dark: {
                  dropdown: {
                      background: "{surface.800}",
                      hoverBackground: "{surface.700}",
                      activeBackground: "{surface.600}",
                      color: "{surface.300}",
                      hoverColor: "{surface.200}",
                      activeColor: "{surface.100}"
                  },
                  today: {
                      background: "{surface.700}",
                      color: "{surface.0}"
                  }
              }
          }
      },
      card: {
          root: {
              background: "{content.background}",
              borderRadius: "{border.radius.xl}",
              color: "{content.color}",
              shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
          },
          body: {
              padding: "1.25rem",
              gap: "0.5rem"
          },
          caption: {
              gap: "0.5rem"
          },
          title: {
              fontSize: "1.25rem",
              fontWeight: "500"
          },
          subtitle: {
              color: "{text.muted.color}"
          }
      },
      carousel: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          content: {
              gap: "0.25rem"
          },
          indicatorList: {
              padding: "1rem",
              gap: "0.5rem"
          },
          indicator: {
              width: "2rem",
              height: "0.5rem",
              borderRadius: "{content.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          colorScheme: {
              light: {
                  indicator: {
                      background: "{surface.200}",
                      hoverBackground: "{surface.300}",
                      activeBackground: "{primary.color}"
                  }
              },
              dark: {
                  indicator: {
                      background: "{surface.700}",
                      hoverBackground: "{surface.600}",
                      activeBackground: "{primary.color}"
                  }
              }
          }
      },
      cascadeselect: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledHoverBackground: "{form.field.filled.hover.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              }
          },
          dropdown: {
              width: "2.5rem",
              color: "{form.field.icon.color}"
          },
          overlay: {
              background: "{overlay.select.background}",
              borderColor: "{overlay.select.border.color}",
              borderRadius: "{overlay.select.border.radius}",
              color: "{overlay.select.color}",
              shadow: "{overlay.select.shadow}"
          },
          list: {
              padding: "{list.padding}",
              gap: "{list.gap}",
              mobileIndent: "1rem"
          },
          option: {
              focusBackground: "{list.option.focus.background}",
              selectedBackground: "{list.option.selected.background}",
              selectedFocusBackground: "{list.option.selected.focus.background}",
              color: "{list.option.color}",
              focusColor: "{list.option.focus.color}",
              selectedColor: "{list.option.selected.color}",
              selectedFocusColor: "{list.option.selected.focus.color}",
              padding: "{list.option.padding}",
              borderRadius: "{list.option.border.radius}",
              icon: {
                  color: "{list.option.icon.color}",
                  focusColor: "{list.option.icon.focus.color}",
                  size: "0.875rem"
              }
          },
          clearIcon: {
              color: "{form.field.icon.color}"
          }
      },
      checkbox: {
          root: {
              borderRadius: "{border.radius.sm}",
              width: "1.25rem",
              height: "1.25rem",
              background: "{form.field.background}",
              checkedBackground: "{primary.color}",
              checkedHoverBackground: "{primary.hover.color}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.border.color}",
              checkedBorderColor: "{primary.color}",
              checkedHoverBorderColor: "{primary.hover.color}",
              checkedFocusBorderColor: "{primary.color}",
              checkedDisabledBorderColor: "{form.field.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              shadow: "{form.field.shadow}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  width: "1rem",
                  height: "1rem"
              },
              lg: {
                  width: "1.5rem",
                  height: "1.5rem"
              }
          },
          icon: {
              size: "0.875rem",
              color: "{form.field.color}",
              checkedColor: "{primary.contrast.color}",
              checkedHoverColor: "{primary.contrast.color}",
              disabledColor: "{form.field.disabled.color}",
              sm: {
                  size: "0.75rem"
              },
              lg: {
                  size: "1rem"
              }
          }
      },
      chip: {
          root: {
              borderRadius: "16px",
              paddingX: "0.75rem",
              paddingY: "0.5rem",
              gap: "0.5rem",
              transitionDuration: "{transition.duration}"
          },
          image: {
              width: "2rem",
              height: "2rem"
          },
          icon: {
              size: "1rem"
          },
          removeIcon: {
              size: "1rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              }
          },
          colorScheme: {
              light: {
                  root: {
                      background: "{surface.100}",
                      color: "{surface.800}"
                  },
                  icon: {
                      color: "{surface.800}"
                  },
                  removeIcon: {
                      color: "{surface.800}"
                  }
              },
              dark: {
                  root: {
                      background: "{surface.800}",
                      color: "{surface.0}"
                  },
                  icon: {
                      color: "{surface.0}"
                  },
                  removeIcon: {
                      color: "{surface.0}"
                  }
              }
          }
      },
      colorpicker: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          preview: {
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          panel: {
              shadow: "{overlay.popover.shadow}",
              borderRadius: "{overlay.popover.borderRadius}"
          },
          colorScheme: {
              light: {
                  panel: {
                      background: "{surface.800}",
                      borderColor: "{surface.900}"
                  },
                  handle: {
                      color: "{surface.0}"
                  }
              },
              dark: {
                  panel: {
                      background: "{surface.900}",
                      borderColor: "{surface.700}"
                  },
                  handle: {
                      color: "{surface.0}"
                  }
              }
          }
      },
      confirmdialog: {
          icon: {
              size: "2rem",
              color: "{overlay.modal.color}"
          },
          content: {
              gap: "1rem"
          }
      },
      confirmpopup: {
          root: {
              background: "{overlay.popover.background}",
              borderColor: "{overlay.popover.border.color}",
              color: "{overlay.popover.color}",
              borderRadius: "{overlay.popover.border.radius}",
              shadow: "{overlay.popover.shadow}",
              gutter: "10px",
              arrowOffset: "1.25rem"
          },
          content: {
              padding: "{overlay.popover.padding}",
              gap: "1rem"
          },
          icon: {
              size: "1.5rem",
              color: "{overlay.popover.color}"
          },
          footer: {
              gap: "0.5rem",
              padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
          }
      },
      contextmenu: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}",
              shadow: "{overlay.navigation.shadow}",
              transitionDuration: "{transition.duration}"
          },
          list: {
              padding: "{navigation.list.padding}",
              gap: "{navigation.list.gap}"
          },
          item: {
              focusBackground: "{navigation.item.focus.background}",
              activeBackground: "{navigation.item.active.background}",
              color: "{navigation.item.color}",
              focusColor: "{navigation.item.focus.color}",
              activeColor: "{navigation.item.active.color}",
              padding: "{navigation.item.padding}",
              borderRadius: "{navigation.item.border.radius}",
              gap: "{navigation.item.gap}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  focusColor: "{navigation.item.icon.focus.color}",
                  activeColor: "{navigation.item.icon.active.color}"
              }
          },
          submenu: {
              mobileIndent: "1rem"
          },
          submenuIcon: {
              size: "{navigation.submenu.icon.size}",
              color: "{navigation.submenu.icon.color}",
              focusColor: "{navigation.submenu.icon.focus.color}",
              activeColor: "{navigation.submenu.icon.active.color}"
          },
          separator: {
              borderColor: "{content.border.color}"
          }
      },
      dataview: {
          root: {
              borderColor: "transparent",
              borderWidth: "0",
              borderRadius: "0",
              padding: "0"
          },
          header: {
              background: "{content.background}",
              color: "{content.color}",
              borderColor: "{content.border.color}",
              borderWidth: "0 0 1px 0",
              padding: "0.75rem 1rem",
              borderRadius: "0"
          },
          content: {
              background: "{content.background}",
              color: "{content.color}",
              borderColor: "transparent",
              borderWidth: "0",
              padding: "0",
              borderRadius: "0"
          },
          footer: {
              background: "{content.background}",
              color: "{content.color}",
              borderColor: "{content.border.color}",
              borderWidth: "1px 0 0 0",
              padding: "0.75rem 1rem",
              borderRadius: "0"
          },
          paginatorTop: {
              borderColor: "{content.border.color}",
              borderWidth: "0 0 1px 0"
          },
          paginatorBottom: {
              borderColor: "{content.border.color}",
              borderWidth: "1px 0 0 0"
          }
      },
      datatable: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          header: {
              background: "{content.background}",
              borderColor: "{datatable.border.color}",
              color: "{content.color}",
              borderWidth: "0 0 1px 0",
              padding: "0.75rem 1rem"
          },
          headerCell: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              borderColor: "{datatable.border.color}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              selectedColor: "{highlight.color}",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              }
          },
          columnTitle: {
              fontWeight: "600"
          },
          row: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              selectedColor: "{highlight.color}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              }
          },
          bodyCell: {
              borderColor: "{datatable.border.color}",
              padding: "0.75rem 1rem"
          },
          footerCell: {
              background: "{content.background}",
              borderColor: "{datatable.border.color}",
              color: "{content.color}",
              padding: "0.75rem 1rem"
          },
          columnFooter: {
              fontWeight: "600"
          },
          footer: {
              background: "{content.background}",
              borderColor: "{datatable.border.color}",
              color: "{content.color}",
              borderWidth: "0 0 1px 0",
              padding: "0.75rem 1rem"
          },
          dropPoint: {
              color: "{primary.color}"
          },
          columnResizerWidth: "0.5rem",
          resizeIndicator: {
              width: "1px",
              color: "{primary.color}"
          },
          sortIcon: {
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              size: "0.875rem"
          },
          loadingIcon: {
              size: "2rem"
          },
          rowToggleButton: {
              hoverBackground: "{content.hover.background}",
              selectedHoverBackground: "{content.background}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              selectedHoverColor: "{primary.color}",
              size: "1.75rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          filter: {
              inlineGap: "0.5rem",
              overlaySelect: {
                  background: "{overlay.select.background}",
                  borderColor: "{overlay.select.border.color}",
                  borderRadius: "{overlay.select.border.radius}",
                  color: "{overlay.select.color}",
                  shadow: "{overlay.select.shadow}"
              },
              overlayPopover: {
                  background: "{overlay.popover.background}",
                  borderColor: "{overlay.popover.border.color}",
                  borderRadius: "{overlay.popover.border.radius}",
                  color: "{overlay.popover.color}",
                  shadow: "{overlay.popover.shadow}",
                  padding: "{overlay.popover.padding}",
                  gap: "0.5rem"
              },
              rule: {
                  borderColor: "{content.border.color}"
              },
              constraintList: {
                  padding: "{list.padding}",
                  gap: "{list.gap}"
              },
              constraint: {
                  focusBackground: "{list.option.focus.background}",
                  selectedBackground: "{list.option.selected.background}",
                  selectedFocusBackground: "{list.option.selected.focus.background}",
                  color: "{list.option.color}",
                  focusColor: "{list.option.focus.color}",
                  selectedColor: "{list.option.selected.color}",
                  selectedFocusColor: "{list.option.selected.focus.color}",
                  separator: {
                      borderColor: "{content.border.color}"
                  },
                  padding: "{list.option.padding}",
                  borderRadius: "{list.option.border.radius}"
              }
          },
          paginatorTop: {
              borderColor: "{datatable.border.color}",
              borderWidth: "0 0 1px 0"
          },
          paginatorBottom: {
              borderColor: "{datatable.border.color}",
              borderWidth: "0 0 1px 0"
          },
          colorScheme: {
              light: {
                  root: {
                      borderColor: "{content.border.color}"
                  },
                  row: {
                      stripedBackground: "{surface.50}"
                  },
                  bodyCell: {
                      selectedBorderColor: "{primary.100}"
                  }
              },
              dark: {
                  root: {
                      borderColor: "{surface.800}"
                  },
                  row: {
                      stripedBackground: "{surface.950}"
                  },
                  bodyCell: {
                      selectedBorderColor: "{primary.900}"
                  }
              }
          }
      },
      dialog: {
          root: {
              background: "{overlay.modal.background}",
              borderColor: "{overlay.modal.border.color}",
              color: "{overlay.modal.color}",
              borderRadius: "{overlay.modal.border.radius}",
              shadow: "{overlay.modal.shadow}"
          },
          header: {
              padding: "{overlay.modal.padding}",
              gap: "0.5rem"
          },
          title: {
              fontSize: "1.25rem",
              fontWeight: "600"
          },
          content: {
              padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
          },
          footer: {
              padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
              gap: "0.5rem"
          }
      },
      divider: {
          root: {
              borderColor: "{content.border.color}"
          },
          content: {
              background: "{content.background}",
              color: "{text.color}"
          },
          horizontal: {
              margin: "1rem 0",
              padding: "0 1rem",
              content: {
                  padding: "0 0.5rem"
              }
          },
          vertical: {
              margin: "0 1rem",
              padding: "0.5rem 0",
              content: {
                  padding: "0.5rem 0"
              }
          }
      },
      dock: {
          root: {
              background: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              padding: "0.5rem",
              borderRadius: "{border.radius.xl}"
          },
          item: {
              borderRadius: "{content.border.radius}",
              padding: "0.5rem",
              size: "3rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          }
      },
      drawer: {
          root: {
              background: "{overlay.modal.background}",
              borderColor: "{overlay.modal.border.color}",
              color: "{overlay.modal.color}",
              shadow: "{overlay.modal.shadow}"
          },
          header: {
              padding: "{overlay.modal.padding}"
          },
          title: {
              fontSize: "1.5rem",
              fontWeight: "600"
          },
          content: {
              padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
          },
          footer: {
              padding: "{overlay.modal.padding}"
          }
      },
      editor: {
          toolbar: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}"
          },
          toolbarItem: {
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              activeColor: "{primary.color}"
          },
          overlay: {
              background: "{overlay.select.background}",
              borderColor: "{overlay.select.border.color}",
              borderRadius: "{overlay.select.border.radius}",
              color: "{overlay.select.color}",
              shadow: "{overlay.select.shadow}",
              padding: "{list.padding}"
          },
          overlayOption: {
              focusBackground: "{list.option.focus.background}",
              color: "{list.option.color}",
              focusColor: "{list.option.focus.color}",
              padding: "{list.option.padding}",
              borderRadius: "{list.option.border.radius}"
          },
          content: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}"
          }
      },
      fieldset: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              color: "{content.color}",
              padding: "0 1.125rem 1.125rem 1.125rem",
              transitionDuration: "{transition.duration}"
          },
          legend: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              borderRadius: "{content.border.radius}",
              borderWidth: "1px",
              borderColor: "transparent",
              padding: "0.5rem 0.75rem",
              gap: "0.5rem",
              fontWeight: "600",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          toggleIcon: {
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}"
          },
          content: {
              padding: "0"
          }
      },
      fileupload: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}",
              transitionDuration: "{transition.duration}"
          },
          header: {
              background: "transparent",
              color: "{text.color}",
              padding: "1.125rem",
              borderColor: "unset",
              borderWidth: "0",
              borderRadius: "0",
              gap: "0.5rem"
          },
          content: {
              highlightBorderColor: "{primary.color}",
              padding: "0 1.125rem 1.125rem 1.125rem",
              gap: "1rem"
          },
          file: {
              padding: "1rem",
              gap: "1rem",
              borderColor: "{content.border.color}",
              info: {
                  gap: "0.5rem"
              }
          },
          fileList: {
              gap: "0.5rem"
          },
          progressbar: {
              height: "0.25rem"
          },
          basic: {
              gap: "0.5rem"
          }
      },
      iftalabel: {
          root: {
              color: "{form.field.float.label.color}",
              focusColor: "{form.field.float.label.focus.color}",
              invalidColor: "{form.field.float.label.invalid.color}",
              transitionDuration: "0.2s",
              positionX: "{form.field.padding.x}",
              top: "{form.field.padding.y}",
              fontSize: "0.75rem",
              fontWeight: "400"
          },
          input: {
              paddingTop: "1.5rem",
              paddingBottom: "{form.field.padding.y}"
          }
      },
      floatlabel: {
          root: {
              color: "{form.field.float.label.color}",
              focusColor: "{form.field.float.label.focus.color}",
              activeColor: "{form.field.float.label.active.color}",
              invalidColor: "{form.field.float.label.invalid.color}",
              transitionDuration: "0.2s",
              positionX: "{form.field.padding.x}",
              positionY: "{form.field.padding.y}",
              fontWeight: "500",
              active: {
                  fontSize: "0.75rem",
                  fontWeight: "400"
              }
          },
          over: {
              active: {
                  top: "-1.25rem"
              }
          },
          in: {
              input: {
                  paddingTop: "1.5rem",
                  paddingBottom: "{form.field.padding.y}"
              },
              active: {
                  top: "{form.field.padding.y}"
              }
          },
          on: {
              borderRadius: "{border.radius.xs}",
              active: {
                  background: "{form.field.background}",
                  padding: "0 0.125rem"
              }
          }
      },
      galleria: {
          root: {
              borderWidth: "1px",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              transitionDuration: "{transition.duration}"
          },
          navButton: {
              background: "rgba(255, 255, 255, 0.1)",
              hoverBackground: "rgba(255, 255, 255, 0.2)",
              color: "{surface.100}",
              hoverColor: "{surface.0}",
              size: "3rem",
              gutter: "0.5rem",
              prev: {
                  borderRadius: "50%"
              },
              next: {
                  borderRadius: "50%"
              },
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          navIcon: {
              size: "1.5rem"
          },
          thumbnailsContent: {
              background: "{content.background}",
              padding: "1rem 0.25rem"
          },
          thumbnailNavButton: {
              size: "2rem",
              borderRadius: "{content.border.radius}",
              gutter: "0.5rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          thumbnailNavButtonIcon: {
              size: "1rem"
          },
          caption: {
              background: "rgba(0, 0, 0, 0.5)",
              color: "{surface.100}",
              padding: "1rem"
          },
          indicatorList: {
              gap: "0.5rem",
              padding: "1rem"
          },
          indicatorButton: {
              width: "1rem",
              height: "1rem",
              activeBackground: "{primary.color}",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          insetIndicatorList: {
              background: "rgba(0, 0, 0, 0.5)"
          },
          insetIndicatorButton: {
              background: "rgba(255, 255, 255, 0.4)",
              hoverBackground: "rgba(255, 255, 255, 0.6)",
              activeBackground: "rgba(255, 255, 255, 0.9)"
          },
          closeButton: {
              size: "3rem",
              gutter: "0.5rem",
              background: "rgba(255, 255, 255, 0.1)",
              hoverBackground: "rgba(255, 255, 255, 0.2)",
              color: "{surface.50}",
              hoverColor: "{surface.0}",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          closeButtonIcon: {
              size: "1.5rem"
          },
          colorScheme: {
              light: {
                  thumbnailNavButton: {
                      hoverBackground: "{surface.100}",
                      color: "{surface.600}",
                      hoverColor: "{surface.700}"
                  },
                  indicatorButton: {
                      background: "{surface.200}",
                      hoverBackground: "{surface.300}"
                  }
              },
              dark: {
                  thumbnailNavButton: {
                      hoverBackground: "{surface.700}",
                      color: "{surface.400}",
                      hoverColor: "{surface.0}"
                  },
                  indicatorButton: {
                      background: "{surface.700}",
                      hoverBackground: "{surface.600}"
                  }
              }
          }
      },
      iconfield: {
          icon: {
              color: "{form.field.icon.color}"
          }
      },
      image: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          preview: {
              icon: {
                  size: "1.5rem"
              },
              mask: {
                  background: "{mask.background}",
                  color: "{mask.color}"
              }
          },
          toolbar: {
              position: {
                  left: "auto",
                  right: "1rem",
                  top: "1rem",
                  bottom: "auto"
              },
              blur: "8px",
              background: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.2)",
              borderWidth: "1px",
              borderRadius: "30px",
              padding: ".5rem",
              gap: "0.5rem"
          },
          action: {
              hoverBackground: "rgba(255,255,255,0.1)",
              color: "{surface.50}",
              hoverColor: "{surface.0}",
              size: "3rem",
              iconSize: "1.5rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          }
      },
      imagecompare: {
          handle: {
              size: "15px",
              hoverSize: "30px",
              background: "rgba(255,255,255,0.3)",
              hoverBackground: "rgba(255,255,255,0.3)",
              borderColor: "unset",
              hoverBorderColor: "unset",
              borderWidth: "0",
              borderRadius: "50%",
              transitionDuration: "{transition.duration}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "rgba(255,255,255,0.3)",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          }
      },
      inlinemessage: {
          root: {
              padding: "{form.field.padding.y} {form.field.padding.x}",
              borderRadius: "{content.border.radius}",
              gap: "0.5rem"
          },
          text: {
              fontWeight: "500"
          },
          icon: {
              size: "1rem"
          },
          colorScheme: {
              light: {
                  info: {
                      background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                      borderColor: "{blue.200}",
                      color: "{blue.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                  },
                  success: {
                      background: "color-mix(in srgb, {green.50}, transparent 5%)",
                      borderColor: "{green.200}",
                      color: "{green.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                  },
                  warn: {
                      background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      borderColor: "{yellow.200}",
                      color: "{yellow.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                  },
                  error: {
                      background: "color-mix(in srgb, {red.50}, transparent 5%)",
                      borderColor: "{red.200}",
                      color: "{red.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                  },
                  secondary: {
                      background: "{surface.100}",
                      borderColor: "{surface.200}",
                      color: "{surface.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                  },
                  contrast: {
                      background: "{surface.900}",
                      borderColor: "{surface.950}",
                      color: "{surface.50}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                  }
              },
              dark: {
                  info: {
                      background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                      color: "{blue.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                  },
                  success: {
                      background: "color-mix(in srgb, {green.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
                      color: "{green.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                  },
                  warn: {
                      background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      color: "{yellow.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                  },
                  error: {
                      background: "color-mix(in srgb, {red.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                      color: "{red.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                  },
                  secondary: {
                      background: "{surface.800}",
                      borderColor: "{surface.700}",
                      color: "{surface.300}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                  },
                  contrast: {
                      background: "{surface.0}",
                      borderColor: "{surface.100}",
                      color: "{surface.950}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                  }
              }
          }
      },
      inplace: {
          root: {
              padding: "{form.field.padding.y} {form.field.padding.x}",
              borderRadius: "{content.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              transitionDuration: "{transition.duration}"
          },
          display: {
              hoverBackground: "{content.hover.background}",
              hoverColor: "{content.hover.color}"
          }
      },
      inputchips: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}"
          },
          chip: {
              borderRadius: "{border.radius.sm}"
          },
          colorScheme: {
              light: {
                  chip: {
                      focusBackground: "{surface.200}",
                      color: "{surface.800}"
                  }
              },
              dark: {
                  chip: {
                      focusBackground: "{surface.700}",
                      color: "{surface.0}"
                  }
              }
          }
      },
      inputgroup: {
          addon: {
              background: "{form.field.background}",
              borderColor: "{form.field.border.color}",
              color: "{form.field.icon.color}",
              borderRadius: "{form.field.border.radius}",
              padding: "0.5rem",
              minWidth: "2.5rem"
          }
      },
      inputnumber: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          button: {
              width: "2.5rem",
              borderRadius: "{form.field.border.radius}",
              verticalPadding: "{form.field.padding.y}"
          },
          colorScheme: {
              light: {
                  button: {
                      background: "transparent",
                      hoverBackground: "{surface.100}",
                      activeBackground: "{surface.200}",
                      borderColor: "{form.field.border.color}",
                      hoverBorderColor: "{form.field.border.color}",
                      activeBorderColor: "{form.field.border.color}",
                      color: "{surface.400}",
                      hoverColor: "{surface.500}",
                      activeColor: "{surface.600}"
                  }
              },
              dark: {
                  button: {
                      background: "transparent",
                      hoverBackground: "{surface.800}",
                      activeBackground: "{surface.700}",
                      borderColor: "{form.field.border.color}",
                      hoverBorderColor: "{form.field.border.color}",
                      activeBorderColor: "{form.field.border.color}",
                      color: "{surface.400}",
                      hoverColor: "{surface.300}",
                      activeColor: "{surface.200}"
                  }
              }
          }
      },
      inputotp: {
          root: {
              gap: "0.5rem"
          },
          input: {
              width: "2.5rem",
              sm: {
                  width: "2rem"
              },
              lg: {
                  width: "3rem"
              }
          }
      },
      inputtext: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledHoverBackground: "{form.field.filled.hover.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              }
          }
      },
      knob: {
          root: {
              transitionDuration: "{transition.duration}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          value: {
              background: "{primary.color}"
          },
          range: {
              background: "{content.border.color}"
          },
          text: {
              color: "{text.muted.color}"
          }
      },
      listbox: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              borderColor: "{form.field.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              shadow: "{form.field.shadow}",
              borderRadius: "{form.field.border.radius}",
              transitionDuration: "{form.field.transition.duration}"
          },
          list: {
              padding: "{list.padding}",
              gap: "{list.gap}",
              header: {
                  padding: "{list.header.padding}"
              }
          },
          option: {
              focusBackground: "{list.option.focus.background}",
              selectedBackground: "{list.option.selected.background}",
              selectedFocusBackground: "{list.option.selected.focus.background}",
              color: "{list.option.color}",
              focusColor: "{list.option.focus.color}",
              selectedColor: "{list.option.selected.color}",
              selectedFocusColor: "{list.option.selected.focus.color}",
              padding: "{list.option.padding}",
              borderRadius: "{list.option.border.radius}"
          },
          optionGroup: {
              background: "{list.option.group.background}",
              color: "{list.option.group.color}",
              fontWeight: "{list.option.group.font.weight}",
              padding: "{list.option.group.padding}"
          },
          checkmark: {
              color: "{list.option.color}",
              gutterStart: "-0.375rem",
              gutterEnd: "0.375rem"
          },
          emptyMessage: {
              padding: "{list.option.padding}"
          },
          colorScheme: {
              light: {
                  option: {
                      stripedBackground: "{surface.50}"
                  }
              },
              dark: {
                  option: {
                      stripedBackground: "{surface.900}"
                  }
              }
          }
      },
      megamenu: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              color: "{content.color}",
              gap: "0.5rem",
              verticalOrientation: {
                  padding: "{navigation.list.padding}",
                  gap: "{navigation.list.gap}"
              },
              horizontalOrientation: {
                  padding: "0.5rem 0.75rem",
                  gap: "0.5rem"
              },
              transitionDuration: "{transition.duration}"
          },
          baseItem: {
              borderRadius: "{content.border.radius}",
              padding: "{navigation.item.padding}"
          },
          item: {
              focusBackground: "{navigation.item.focus.background}",
              activeBackground: "{navigation.item.active.background}",
              color: "{navigation.item.color}",
              focusColor: "{navigation.item.focus.color}",
              activeColor: "{navigation.item.active.color}",
              padding: "{navigation.item.padding}",
              borderRadius: "{navigation.item.border.radius}",
              gap: "{navigation.item.gap}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  focusColor: "{navigation.item.icon.focus.color}",
                  activeColor: "{navigation.item.icon.active.color}"
              }
          },
          overlay: {
              padding: "0",
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              color: "{content.color}",
              shadow: "{overlay.navigation.shadow}",
              gap: "0.5rem"
          },
          submenu: {
              padding: "{navigation.list.padding}",
              gap: "{navigation.list.gap}"
          },
          submenuLabel: {
              padding: "{navigation.submenu.label.padding}",
              fontWeight: "{navigation.submenu.label.font.weight}",
              background: "{navigation.submenu.label.background.}",
              color: "{navigation.submenu.label.color}"
          },
          submenuIcon: {
              size: "{navigation.submenu.icon.size}",
              color: "{navigation.submenu.icon.color}",
              focusColor: "{navigation.submenu.icon.focus.color}",
              activeColor: "{navigation.submenu.icon.active.color}"
          },
          separator: {
              borderColor: "{content.border.color}"
          },
          mobileButton: {
              borderRadius: "50%",
              size: "1.75rem",
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              hoverBackground: "{content.hover.background}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          }
      },
      menu: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}",
              shadow: "{overlay.navigation.shadow}",
              transitionDuration: "{transition.duration}"
          },
          list: {
              padding: "{navigation.list.padding}",
              gap: "{navigation.list.gap}"
          },
          item: {
              focusBackground: "{navigation.item.focus.background}",
              color: "{navigation.item.color}",
              focusColor: "{navigation.item.focus.color}",
              padding: "{navigation.item.padding}",
              borderRadius: "{navigation.item.border.radius}",
              gap: "{navigation.item.gap}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  focusColor: "{navigation.item.icon.focus.color}"
              }
          },
          submenuLabel: {
              padding: "{navigation.submenu.label.padding}",
              fontWeight: "{navigation.submenu.label.font.weight}",
              background: "{navigation.submenu.label.background}",
              color: "{navigation.submenu.label.color}"
          },
          separator: {
              borderColor: "{content.border.color}"
          }
      },
      menubar: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              color: "{content.color}",
              gap: "0.5rem",
              padding: "0.5rem 0.75rem",
              transitionDuration: "{transition.duration}"
          },
          baseItem: {
              borderRadius: "{content.border.radius}",
              padding: "{navigation.item.padding}"
          },
          item: {
              focusBackground: "{navigation.item.focus.background}",
              activeBackground: "{navigation.item.active.background}",
              color: "{navigation.item.color}",
              focusColor: "{navigation.item.focus.color}",
              activeColor: "{navigation.item.active.color}",
              padding: "{navigation.item.padding}",
              borderRadius: "{navigation.item.border.radius}",
              gap: "{navigation.item.gap}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  focusColor: "{navigation.item.icon.focus.color}",
                  activeColor: "{navigation.item.icon.active.color}"
              }
          },
          submenu: {
              padding: "{navigation.list.padding}",
              gap: "{navigation.list.gap}",
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              shadow: "{overlay.navigation.shadow}",
              mobileIndent: "1rem",
              icon: {
                  size: "{navigation.submenu.icon.size}",
                  color: "{navigation.submenu.icon.color}",
                  focusColor: "{navigation.submenu.icon.focus.color}",
                  activeColor: "{navigation.submenu.icon.active.color}"
              }
          },
          separator: {
              borderColor: "{content.border.color}"
          },
          mobileButton: {
              borderRadius: "50%",
              size: "1.75rem",
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              hoverBackground: "{content.hover.background}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          }
      },
      message: {
          root: {
              borderRadius: "{content.border.radius}",
              borderWidth: "1px",
              transitionDuration: "{transition.duration}"
          },
          content: {
              padding: "0.5rem 0.75rem",
              gap: "0.5rem",
              sm: {
                  padding: "0.375rem 0.625rem"
              },
              lg: {
                  padding: "0.625rem 0.875rem"
              }
          },
          text: {
              fontSize: "1rem",
              fontWeight: "500",
              sm: {
                  fontSize: "0.875rem"
              },
              lg: {
                  fontSize: "1.125rem"
              }
          },
          icon: {
              size: "1.125rem",
              sm: {
                  size: "1rem"
              },
              lg: {
                  size: "1.25rem"
              }
          },
          closeButton: {
              width: "1.75rem",
              height: "1.75rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  offset: "{focus.ring.offset}"
              }
          },
          closeIcon: {
              size: "1rem",
              sm: {
                  size: "0.875rem"
              },
              lg: {
                  size: "1.125rem"
              }
          },
          outlined: {
              root: {
                  borderWidth: "1px"
              }
          },
          simple: {
              content: {
                  padding: "0"
              }
          },
          colorScheme: {
              light: {
                  info: {
                      background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                      borderColor: "{blue.200}",
                      color: "{blue.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{blue.100}",
                          focusRing: {
                              color: "{blue.600}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{blue.600}",
                          borderColor: "{blue.600}"
                      },
                      simple: {
                          color: "{blue.600}"
                      }
                  },
                  success: {
                      background: "color-mix(in srgb, {green.50}, transparent 5%)",
                      borderColor: "{green.200}",
                      color: "{green.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{green.100}",
                          focusRing: {
                              color: "{green.600}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{green.600}",
                          borderColor: "{green.600}"
                      },
                      simple: {
                          color: "{green.600}"
                      }
                  },
                  warn: {
                      background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      borderColor: "{yellow.200}",
                      color: "{yellow.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{yellow.100}",
                          focusRing: {
                              color: "{yellow.600}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{yellow.600}",
                          borderColor: "{yellow.600}"
                      },
                      simple: {
                          color: "{yellow.600}"
                      }
                  },
                  error: {
                      background: "color-mix(in srgb, {red.50}, transparent 5%)",
                      borderColor: "{red.200}",
                      color: "{red.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{red.100}",
                          focusRing: {
                              color: "{red.600}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{red.600}",
                          borderColor: "{red.600}"
                      },
                      simple: {
                          color: "{red.600}"
                      }
                  },
                  secondary: {
                      background: "{surface.100}",
                      borderColor: "{surface.200}",
                      color: "{surface.600}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.200}",
                          focusRing: {
                              color: "{surface.600}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{surface.500}",
                          borderColor: "{surface.500}"
                      },
                      simple: {
                          color: "{surface.500}"
                      }
                  },
                  contrast: {
                      background: "{surface.900}",
                      borderColor: "{surface.950}",
                      color: "{surface.50}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.800}",
                          focusRing: {
                              color: "{surface.50}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{surface.950}",
                          borderColor: "{surface.950}"
                      },
                      simple: {
                          color: "{surface.950}"
                      }
                  }
              },
              dark: {
                  info: {
                      background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                      color: "{blue.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{blue.500}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{blue.500}",
                          borderColor: "{blue.500}"
                      },
                      simple: {
                          color: "{blue.500}"
                      }
                  },
                  success: {
                      background: "color-mix(in srgb, {green.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
                      color: "{green.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{green.500}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{green.500}",
                          borderColor: "{green.500}"
                      },
                      simple: {
                          color: "{green.500}"
                      }
                  },
                  warn: {
                      background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      color: "{yellow.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{yellow.500}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{yellow.500}",
                          borderColor: "{yellow.500}"
                      },
                      simple: {
                          color: "{yellow.500}"
                      }
                  },
                  error: {
                      background: "color-mix(in srgb, {red.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                      color: "{red.500}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{red.500}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{red.500}",
                          borderColor: "{red.500}"
                      },
                      simple: {
                          color: "{red.500}"
                      }
                  },
                  secondary: {
                      background: "{surface.800}",
                      borderColor: "{surface.700}",
                      color: "{surface.300}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.700}",
                          focusRing: {
                              color: "{surface.300}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{surface.400}",
                          borderColor: "{surface.400}"
                      },
                      simple: {
                          color: "{surface.400}"
                      }
                  },
                  contrast: {
                      background: "{surface.0}",
                      borderColor: "{surface.100}",
                      color: "{surface.950}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.100}",
                          focusRing: {
                              color: "{surface.950}",
                              shadow: "none"
                          }
                      },
                      outlined: {
                          color: "{surface.0}",
                          borderColor: "{surface.0}"
                      },
                      simple: {
                          color: "{surface.0}"
                      }
                  }
              }
          }
      },
      metergroup: {
          root: {
              borderRadius: "{content.border.radius}",
              gap: "1rem"
          },
          meters: {
              background: "{content.border.color}",
              size: "0.5rem"
          },
          label: {
              gap: "0.5rem"
          },
          labelMarker: {
              size: "0.5rem"
          },
          labelIcon: {
              size: "1rem"
          },
          labelList: {
              verticalGap: "0.5rem",
              horizontalGap: "1rem"
          }
      },
      multiselect: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledHoverBackground: "{form.field.filled.hover.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              }
          },
          dropdown: {
              width: "2.5rem",
              color: "{form.field.icon.color}"
          },
          overlay: {
              background: "{overlay.select.background}",
              borderColor: "{overlay.select.border.color}",
              borderRadius: "{overlay.select.border.radius}",
              color: "{overlay.select.color}",
              shadow: "{overlay.select.shadow}"
          },
          list: {
              padding: "{list.padding}",
              gap: "{list.gap}",
              header: {
                  padding: "{list.header.padding}"
              }
          },
          option: {
              focusBackground: "{list.option.focus.background}",
              selectedBackground: "{list.option.selected.background}",
              selectedFocusBackground: "{list.option.selected.focus.background}",
              color: "{list.option.color}",
              focusColor: "{list.option.focus.color}",
              selectedColor: "{list.option.selected.color}",
              selectedFocusColor: "{list.option.selected.focus.color}",
              padding: "{list.option.padding}",
              borderRadius: "{list.option.border.radius}",
              gap: "0.5rem"
          },
          optionGroup: {
              background: "{list.option.group.background}",
              color: "{list.option.group.color}",
              fontWeight: "{list.option.group.font.weight}",
              padding: "{list.option.group.padding}"
          },
          clearIcon: {
              color: "{form.field.icon.color}"
          },
          chip: {
              borderRadius: "{border.radius.sm}"
          },
          emptyMessage: {
              padding: "{list.option.padding}"
          }
      },
      orderlist: {
          root: {
              gap: "1.125rem"
          },
          controls: {
              gap: "0.5rem"
          }
      },
      organizationchart: {
          root: {
              gutter: "0.75rem",
              transitionDuration: "{transition.duration}"
          },
          node: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              selectedColor: "{highlight.color}",
              hoverColor: "{content.hover.color}",
              padding: "0.75rem 1rem",
              toggleablePadding: "0.75rem 1rem 1.25rem 1rem",
              borderRadius: "{content.border.radius}"
          },
          nodeToggleButton: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              borderColor: "{content.border.color}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              size: "1.5rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          connector: {
              color: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              height: "24px"
          }
      },
      overlaybadge: {
          root: {
              outline: {
                  width: "2px",
                  color: "{content.background}"
              }
          }
      },
      popover: {
          root: {
              background: "{overlay.popover.background}",
              borderColor: "{overlay.popover.border.color}",
              color: "{overlay.popover.color}",
              borderRadius: "{overlay.popover.border.radius}",
              shadow: "{overlay.popover.shadow}",
              gutter: "10px",
              arrowOffset: "1.25rem"
          },
          content: {
              padding: "{overlay.popover.padding}"
          }
      },
      paginator: {
          root: {
              padding: "0.5rem 1rem",
              gap: "0.25rem",
              borderRadius: "{content.border.radius}",
              background: "{content.background}",
              color: "{content.color}",
              transitionDuration: "{transition.duration}"
          },
          navButton: {
              background: "transparent",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              selectedColor: "{highlight.color}",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          currentPageReport: {
              color: "{text.muted.color}"
          },
          jumpToPageInput: {
              maxWidth: "2.5rem"
          }
      },
      password: {
          meter: {
              background: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              height: ".75rem"
          },
          icon: {
              color: "{form.field.icon.color}"
          },
          overlay: {
              background: "{overlay.popover.background}",
              borderColor: "{overlay.popover.border.color}",
              borderRadius: "{overlay.popover.border.radius}",
              color: "{overlay.popover.color}",
              padding: "{overlay.popover.padding}",
              shadow: "{overlay.popover.shadow}"
          },
          content: {
              gap: "0.5rem"
          },
          colorScheme: {
              light: {
                  strength: {
                      weakBackground: "{red.500}",
                      mediumBackground: "{amber.500}",
                      strongBackground: "{green.500}"
                  }
              },
              dark: {
                  strength: {
                      weakBackground: "{red.400}",
                      mediumBackground: "{amber.400}",
                      strongBackground: "{green.400}"
                  }
              }
          }
      },
      panel: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}"
          },
          header: {
              background: "transparent",
              color: "{text.color}",
              padding: "1.125rem",
              borderColor: "{content.border.color}",
              borderWidth: "0",
              borderRadius: "0"
          },
          toggleableHeader: {
              padding: "0.375rem 1.125rem"
          },
          title: {
              fontWeight: "600"
          },
          content: {
              padding: "0 1.125rem 1.125rem 1.125rem"
          },
          footer: {
              padding: "0 1.125rem 1.125rem 1.125rem"
          }
      },
      panelmenu: {
          root: {
              gap: "0.5rem",
              transitionDuration: "{transition.duration}"
          },
          panel: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderWidth: "1px",
              color: "{content.color}",
              padding: "0.25rem 0.25rem",
              borderRadius: "{content.border.radius}",
              first: {
                  borderWidth: "1px",
                  topBorderRadius: "{content.border.radius}"
              },
              last: {
                  borderWidth: "1px",
                  bottomBorderRadius: "{content.border.radius}"
              }
          },
          item: {
              focusBackground: "{navigation.item.focus.background}",
              color: "{navigation.item.color}",
              focusColor: "{navigation.item.focus.color}",
              gap: "0.5rem",
              padding: "{navigation.item.padding}",
              borderRadius: "{content.border.radius}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  focusColor: "{navigation.item.icon.focus.color}"
              }
          },
          submenu: {
              indent: "1rem"
          },
          submenuIcon: {
              color: "{navigation.submenu.icon.color}",
              focusColor: "{navigation.submenu.icon.focus.color}"
          }
      },
      picklist: {
          root: {
              gap: "1.125rem"
          },
          controls: {
              gap: "0.5rem"
          }
      },
      progressbar: {
          root: {
              background: "#3a323a",
              borderRadius: "{content.border.radius}",
              height: "1.25rem"
          },
          value: {
              background: "{primary.color}"
          },
          label: {
              color: "{primary.contrast.color}",
              fontSize: "0.75rem",
              fontWeight: "600"
          }
      },
      progressspinner: {
          // colorScheme: {
          //     light: {
          //         root: {
          //             color.1: "{red.500}",
          //             color.2: "{blue.500}",
          //             color.3: "{green.500}",
          //             color.4: "{yellow.500}"
          //         }
          //     },
          //     dark: {
          //         root: {
          //             color.1: "{red.400}",
          //             color.2: "{blue.400}",
          //             color.3: "{green.400}",
          //             color.4: "{yellow.400}"
          //         }
          //     }
          // }
      },
      radiobutton: {
          root: {
              width: "1.25rem",
              height: "1.25rem",
              background: "{form.field.background}",
              checkedBackground: "{primary.color}",
              checkedHoverBackground: "{primary.hover.color}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.border.color}",
              checkedBorderColor: "{primary.color}",
              checkedHoverBorderColor: "{primary.hover.color}",
              checkedFocusBorderColor: "{primary.color}",
              checkedDisabledBorderColor: "{form.field.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              shadow: "{form.field.shadow}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  width: "1rem",
                  height: "1rem"
              },
              lg: {
                  width: "1.5rem",
                  height: "1.5rem"
              }
          },
          icon: {
              size: "0.75rem",
              checkedColor: "{primary.contrast.color}",
              checkedHoverColor: "{primary.contrast.color}",
              disabledColor: "{form.field.disabled.color}",
              sm: {
                  size: "0.5rem"
              },
              lg: {
                  size: "1rem"
              }
          }
      },
      rating: {
          root: {
              gap: "0.25rem",
              transitionDuration: "{transition.duration}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          icon: {
              size: "1rem",
              color: "{text.muted.color}",
              hoverColor: "{primary.color}",
              activeColor: "{primary.color}"
          }
      },
      scrollpanel: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          bar: {
              size: "9px",
              borderRadius: "{border.radius.sm}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          colorScheme: {
              light: {
                  bar: {
                      background: "{surface.100}"
                  }
              },
              dark: {
                  bar: {
                      background: "{surface.800}"
                  }
              }
          }
      },
      select: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledHoverBackground: "{form.field.filled.hover.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              }
          },
          dropdown: {
              width: "2.5rem",
              color: "{primary.color}"
          },
          overlay: {
              background: "{overlay.select.background}",
              borderColor: "{overlay.select.border.color}",
              borderRadius: "{overlay.select.border.radius}",
              color: "{overlay.select.color}",
              shadow: "{overlay.select.shadow}"
          },
          list: {
              padding: "{list.padding}",
              gap: "{list.gap}",
              header: {
                  padding: "{list.header.padding}"
              }
          },
          option: {
              focusBackground: "{list.option.focus.background}",
              selectedBackground: "{list.option.selected.background}",
              selectedFocusBackground: "{list.option.selected.focus.background}",
              color: "{list.option.color}",
              focusColor: "{list.option.focus.color}",
              selectedColor: "{list.option.selected.color}",
              selectedFocusColor: "{list.option.selected.focus.color}",
              padding: "{list.option.padding}",
              borderRadius: "{list.option.border.radius}"
          },
          optionGroup: {
              background: "{list.option.group.background}",
              color: "{list.option.group.color}",
              fontWeight: "{list.option.group.font.weight}",
              padding: "{list.option.group.padding}"
          },
          clearIcon: {
              color: "{primary.color}"
          },
          checkmark: {
              color: "{list.option.color}",
              gutterStart: "-0.375rem",
              gutterEnd: "0.375rem"
          },
          emptyMessage: {
              padding: "{list.option.padding}",
          }
      },
      selectbutton: {
          root: {
              borderRadius: "{form.field.border.radius}"
          },
          colorScheme: {
              light: {
                  root: {
                      invalidBorderColor: "{form.field.invalid.border.color}"
                  }
              },
              dark: {
                  root: {
                      invalidBorderColor: "{form.field.invalid.border.color}"
                  }
              }
          }
      },
      skeleton: {
          root: {
              borderRadius: "{content.border.radius}"
          },
          colorScheme: {
              light: {
                  root: {
                      background: "{surface.200}",
                      animationBackground: "rgba(255,255,255,0.4)"
                  }
              },
              dark: {
                  root: {
                      background: "rgba(255, 255, 255, 0.06)",
                      animationBackground: "rgba(255, 255, 255, 0.04)"
                  }
              }
          }
      },
      slider: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          track: {
              background: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              size: "3px"
          },
          range: {
              background: "{primary.color}"
          },
          handle: {
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "{content.border.color}",
              hoverBackground: "{content.border.color}",
              content: {
                  borderRadius: "50%",
                  hoverBackground: "{content.background}",
                  width: "16px",
                  height: "16px",
                  shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
              },
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          colorScheme: {
              light: {
                  handle: {
                      contentBackground: "{surface.0}"
                  }
              },
              dark: {
                  handle: {
                      contentBackground: "{surface.950}"
                  }
              }
          }
      },
      speeddial: {
          root: {
              gap: "0.5rem",
              transitionDuration: "{transition.duration}"
          }
      },
      splitter: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              transitionDuration: "{transition.duration}"
          },
          gutter: {
              background: "{content.border.color}"
          },
          handle: {
              size: "24px",
              background: "transparent",
              borderRadius: "{content.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          }
      },
      splitbutton: {
          root: {
              borderRadius: "{form.field.border.radius}",
              roundedBorderRadius: "2rem",
              raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
          }
      },
      stepper: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          separator: {
              background: "{content.border.color}",
              activeBackground: "{primary.color}",
              margin: "0 0 0 1.625rem",
              size: "2px"
          },
          step: {
              padding: "0.5rem",
              gap: "1rem"
          },
          stepHeader: {
              padding: "0",
              borderRadius: "{content.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              gap: "0.5rem"
          },
          stepTitle: {
              color: "{text.muted.color}",
              activeColor: "{primary.color}",
              fontWeight: "500"
          },
          stepNumber: {
              background: "{content.background}",
              activeBackground: "{content.background}",
              borderColor: "{content.border.color}",
              activeBorderColor: "{content.border.color}",
              color: "{text.muted.color}",
              activeColor: "{primary.color}",
              size: "2rem",
              fontSize: "1.143rem",
              fontWeight: "500",
              borderRadius: "50%",
              shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
          },
          steppanels: {
              padding: "0.875rem 0.5rem 1.125rem 0.5rem"
          },
          steppanel: {
              background: "{content.background}",
              color: "{content.color}",
              padding: "0",
              indent: "1rem"
          }
      },
      steps: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          separator: {
              background: "{content.border.color}"
          },
          itemLink: {
              borderRadius: "{content.border.radius}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              gap: "0.5rem"
          },
          itemLabel: {
              color: "{text.muted.color}",
              activeColor: "{primary.color}",
              fontWeight: "500"
          },
          itemNumber: {
              background: "{content.background}",
              activeBackground: "{content.background}",
              borderColor: "{content.border.color}",
              activeBorderColor: "{content.border.color}",
              color: "{text.muted.color}",
              activeColor: "{primary.color}",
              size: "2rem",
              fontSize: "1.143rem",
              fontWeight: "500",
              borderRadius: "50%",
              shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
          }
      },
      tabmenu: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          tablist: {
              borderWidth: "0 0 1px 0",
              background: "{content.background}",
              borderColor: "{content.border.color}"
          },
          item: {
              background: "transparent",
              hoverBackground: "transparent",
              activeBackground: "transparent",
              borderWidth: "0 0 1px 0",
              borderColor: "{content.border.color}",
              hoverBorderColor: "{content.border.color}",
              activeBorderColor: "{primary.color}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              activeColor: "{primary.color}",
              padding: "1rem 1.125rem",
              fontWeight: "600",
              margin: "0 0 -1px 0",
              gap: "0.5rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          itemIcon: {
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              activeColor: "{primary.color}"
          },
          activeBar: {
              height: "1px",
              bottom: "-1px",
              background: "{primary.color}"
          }
      },
      tabs: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          tablist: {
              borderWidth: "0 0 1px 0",
              background: "{content.background}",
              borderColor: "{content.border.color}"
          },
          tab: {
              background: "transparent",
              hoverBackground: "transparent",
              activeBackground: "transparent",
              borderWidth: "0 0 1px 0",
              borderColor: "{content.border.color}",
              hoverBorderColor: "{content.border.color}",
              activeBorderColor: "{primary.color}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              activeColor: "{primary.color}",
              padding: "1rem 1.125rem",
              fontWeight: "600",
              margin: "0 0 -1px 0",
              gap: "0.5rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              }
          },
          tabpanel: {
              background: "{content.background}",
              color: "{content.color}",
              padding: "0.875rem 1.125rem 1.125rem 1.125rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "inset {focus.ring.shadow}"
              }
          },
          navButton: {
              background: "{content.background}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              width: "2.5rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              }
          },
          activeBar: {
              height: "1px",
              bottom: "-1px",
              background: "{primary.color}"
          },
          colorScheme: {
              light: {
                  navButton: {
                      shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                  }
              },
              dark: {
                  navButton: {
                      shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                  }
              }
          }
      },
      tabview: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          tabList: {
              background: "{content.background}",
              borderColor: "{content.border.color}"
          },
          tab: {
              borderColor: "{content.border.color}",
              activeBorderColor: "{primary.color}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              activeColor: "{primary.color}"
          },
          tabPanel: {
              background: "{content.background}",
              color: "{content.color}"
          },
          navButton: {
              background: "{content.background}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}"
          },
          colorScheme: {
              light: {
                  navButton: {
                      shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                  }
              },
              dark: {
                  navButton: {
                      shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                  }
              }
          }
      },
      textarea: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              }
          }
      },
      tieredmenu: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              color: "{content.color}",
              borderRadius: "{content.border.radius}",
              shadow: "{overlay.navigation.shadow}",
              transitionDuration: "{transition.duration}"
          },
          list: {
              padding: "{navigation.list.padding}",
              gap: "{navigation.list.gap}"
          },
          item: {
              focusBackground: "{navigation.item.focus.background}",
              activeBackground: "{navigation.item.active.background}",
              color: "{navigation.item.color}",
              focusColor: "{navigation.item.focus.color}",
              activeColor: "{navigation.item.active.color}",
              padding: "{navigation.item.padding}",
              borderRadius: "{navigation.item.border.radius}",
              gap: "{navigation.item.gap}",
              icon: {
                  color: "{navigation.item.icon.color}",
                  focusColor: "{navigation.item.icon.focus.color}",
                  activeColor: "{navigation.item.icon.active.color}"
              }
          },
          submenu: {
              mobileIndent: "1rem"
          },
          submenuIcon: {
              size: "{navigation.submenu.icon.size}",
              color: "{navigation.submenu.icon.color}",
              focusColor: "{navigation.submenu.icon.focus.color}",
              activeColor: "{navigation.submenu.icon.active.color}"
          },
          separator: {
              borderColor: "{content.border.color}"
          }
      },
      tag: {
          root: {
              fontSize: "0.875rem",
              fontWeight: "700",
              padding: "0.25rem 0.5rem",
              gap: "0.25rem",
              borderRadius: "{content.border.radius}",
              roundedBorderRadius: "{border.radius.xl}"
          },
          icon: {
              size: "0.75rem"
          },
          colorScheme: {
              light: {
                  primary: {
                      background: "{primary.100}",
                      color: "{primary.700}"
                  },
                  secondary: {
                      background: "{surface.100}",
                      color: "{surface.600}"
                  },
                  success: {
                      background: "{green.100}",
                      color: "{green.700}"
                  },
                  info: {
                      background: "{sky.100}",
                      color: "{sky.700}"
                  },
                  warn: {
                      background: "{orange.100}",
                      color: "{orange.700}"
                  },
                  danger: {
                      background: "{red.100}",
                      color: "{red.700}"
                  },
                  contrast: {
                      background: "{surface.950}",
                      color: "{surface.0}"
                  }
              },
              dark: {
                  primary: {
                      background: "color-mix(in srgb, {primary.500}, transparent 84%)",
                      color: "{primary.300}"
                  },
                  secondary: {
                      background: "{surface.800}",
                      color: "{surface.300}"
                  },
                  success: {
                      background: "color-mix(in srgb, {green.500}, transparent 84%)",
                      color: "{green.300}"
                  },
                  info: {
                      background: "color-mix(in srgb, {sky.500}, transparent 84%)",
                      color: "{sky.300}"
                  },
                  warn: {
                      background: "color-mix(in srgb, {orange.500}, transparent 84%)",
                      color: "{orange.300}"
                  },
                  danger: {
                      background: "color-mix(in srgb, {red.500}, transparent 84%)",
                      color: "{red.300}"
                  },
                  contrast: {
                      background: "{surface.0}",
                      color: "{surface.950}"
                  }
              }
          }
      },
      terminal: {
          root: {
              background: "{form.field.background}",
              borderColor: "{form.field.border.color}",
              color: "{form.field.color}",
              height: "18rem",
              padding: "{form.field.padding.y} {form.field.padding.x}",
              borderRadius: "{form.field.border.radius}"
          },
          prompt: {
              gap: "0.25rem"
          },
          commandResponse: {
              margin: "2px 0"
          }
      },
      timeline: {
          event: {
              minHeight: "5rem"
          },
          horizontal: {
              eventContent: {
                  padding: "1rem 0"
              }
          },
          vertical: {
              eventContent: {
                  padding: "0 1rem"
              }
          },
          eventMarker: {
              size: "1.125rem",
              borderRadius: "50%",
              borderWidth: "2px",
              background: "{content.background}",
              borderColor: "{content.border.color}",
              content: {
                  borderRadius: "50%",
                  size: "0.375rem",
                  background: "{primary.color}",
                  insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
              }
          },
          eventConnector: {
              color: "{content.border.color}",
              size: "2px"
          }
      },
      togglebutton: {
          root: {
              padding: "0.5rem 1rem",
              borderRadius: "{content.border.radius}",
              gap: "0.5rem",
              fontWeight: "500",
              disabledBackground: "{form.field.disabled.background}",
              disabledBorderColor: "{form.field.disabled.background}",
              disabledColor: "{form.field.disabled.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  padding: "0.375rem 0.75rem"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  padding: "0.625rem 1.25rem"
              }
          },
          icon: {
              disabledColor: "{form.field.disabled.color}"
          },
          content: {
              left: "0.25rem",
              top: "0.25rem",
              checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"
          },
          colorScheme: {
              light: {
                  root: {
                      background: "{surface.100}",
                      checkedBackground: "{surface.100}",
                      hoverBackground: "{surface.100}",
                      borderColor: "{surface.100}",
                      color: "{surface.500}",
                      hoverColor: "{surface.700}",
                      checkedColor: "{surface.900}",
                      checkedBorderColor: "{surface.100}"
                  },
                  content: {
                      checkedBackground: "{surface.0}"
                  },
                  icon: {
                      color: "{surface.500}",
                      hoverColor: "{surface.700}",
                      checkedColor: "{surface.900}"
                  }
              },
              dark: {
                  root: {
                      background: "{surface.950}",
                      checkedBackground: "{surface.950}",
                      hoverBackground: "{surface.950}",
                      borderColor: "{surface.950}",
                      color: "{surface.400}",
                      hoverColor: "{surface.300}",
                      checkedColor: "{surface.0}",
                      checkedBorderColor: "{surface.950}"
                  },
                  content: {
                      checkedBackground: "{surface.800}"
                  },
                  icon: {
                      color: "{surface.400}",
                      hoverColor: "{surface.300}",
                      checkedColor: "{surface.0}"
                  }
              }
          }
      },
      toggleswitch: {
          root: {
              width: "2.5rem",
              height: "1.5rem",
              borderRadius: "30px",
              gap: "0.25rem",
              shadow: "{form.field.shadow}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              },
              borderWidth: "1px",
              borderColor: "transparent",
              hoverBorderColor: "transparent",
              checkedBorderColor: "transparent",
              checkedHoverBorderColor: "transparent",
              invalidBorderColor: "{form.field.invalid.border.color}",
              transitionDuration: "{form.field.transition.duration}",
              slideDuration: "0.2s"
          },
          handle: {
              borderRadius: "50%",
              size: "1rem"
          },
          colorScheme: {
              light: {
                  root: {
                      background: "{surface.300}",
                      disabledBackground: "{form.field.disabled.background}",
                      hoverBackground: "{surface.400}",
                      checkedBackground: "{primary.color}",
                      checkedHoverBackground: "{primary.hover.color}"
                  },
                  handle: {
                      background: "{surface.0}",
                      disabledBackground: "{form.field.disabled.color}",
                      hoverBackground: "{surface.0}",
                      checkedBackground: "{surface.0}",
                      checkedHoverBackground: "{surface.0}",
                      color: "{text.muted.color}",
                      hoverColor: "{text.color}",
                      checkedColor: "{primary.color}",
                      checkedHoverColor: "{primary.hover.color}"
                  }
              },
              dark: {
                  root: {
                      background: "{surface.700}",
                      disabledBackground: "{surface.600}",
                      hoverBackground: "{surface.600}",
                      checkedBackground: "{primary.color}",
                      checkedHoverBackground: "{primary.hover.color}"
                  },
                  handle: {
                      background: "{surface.400}",
                      disabledBackground: "{surface.900}",
                      hoverBackground: "{surface.300}",
                      checkedBackground: "{surface.900}",
                      checkedHoverBackground: "{surface.900}",
                      color: "{surface.900}",
                      hoverColor: "{surface.800}",
                      checkedColor: "{primary.color}",
                      checkedHoverColor: "{primary.hover.color}"
                  }
              }
          }
      },
      tree: {
          root: {
              background: "{content.background}",
              color: "{content.color}",
              padding: "1rem",
              gap: "2px",
              indent: "1rem",
              transitionDuration: "{transition.duration}"
          },
          node: {
              padding: "0.25rem 0.5rem",
              borderRadius: "{content.border.radius}",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              color: "{text.color}",
              hoverColor: "{text.hover.color}",
              selectedColor: "{highlight.color}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              },
              gap: "0.25rem"
          },
          nodeIcon: {
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              selectedColor: "{highlight.color}"
          },
          nodeToggleButton: {
              borderRadius: "50%",
              size: "1.75rem",
              hoverBackground: "{content.hover.background}",
              selectedHoverBackground: "{content.background}",
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              selectedHoverColor: "{primary.color}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          loadingIcon: {
              size: "2rem"
          },
          filter: {
              margin: "0 0 0.5rem 0"
          }
      },
      treeselect: {
          root: {
              background: "{form.field.background}",
              disabledBackground: "{form.field.disabled.background}",
              filledBackground: "{form.field.filled.background}",
              filledHoverBackground: "{form.field.filled.hover.background}",
              filledFocusBackground: "{form.field.filled.focus.background}",
              borderColor: "{form.field.border.color}",
              hoverBorderColor: "{form.field.hover.border.color}",
              focusBorderColor: "{form.field.focus.border.color}",
              invalidBorderColor: "{form.field.invalid.border.color}",
              color: "{form.field.color}",
              disabledColor: "{form.field.disabled.color}",
              placeholderColor: "{form.field.placeholder.color}",
              invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
              shadow: "{form.field.shadow}",
              paddingX: "{form.field.padding.x}",
              paddingY: "{form.field.padding.y}",
              borderRadius: "{form.field.border.radius}",
              focusRing: {
                  width: "{form.field.focus.ring.width}",
                  style: "{form.field.focus.ring.style}",
                  color: "{form.field.focus.ring.color}",
                  offset: "{form.field.focus.ring.offset}",
                  shadow: "{form.field.focus.ring.shadow}"
              },
              transitionDuration: "{form.field.transition.duration}",
              sm: {
                  fontSize: "{form.field.sm.font.size}",
                  paddingX: "{form.field.sm.padding.x}",
                  paddingY: "{form.field.sm.padding.y}"
              },
              lg: {
                  fontSize: "{form.field.lg.font.size}",
                  paddingX: "{form.field.lg.padding.x}",
                  paddingY: "{form.field.lg.padding.y}"
              }
          },
          dropdown: {
              width: "2.5rem",
              color: "{form.field.icon.color}"
          },
          overlay: {
              background: "{overlay.select.background}",
              borderColor: "{overlay.select.border.color}",
              borderRadius: "{overlay.select.border.radius}",
              color: "{overlay.select.color}",
              shadow: "{overlay.select.shadow}"
          },
          tree: {
              padding: "{list.padding}"
          },
          clearIcon: {
              color: "{form.field.icon.color}"
          },
          emptyMessage: {
              padding: "{list.option.padding}"
          },
          chip: {
              borderRadius: "{border.radius.sm}"
          }
      },
      treetable: {
          root: {
              transitionDuration: "{transition.duration}"
          },
          header: {
              background: "{content.background}",
              borderColor: "{treetable.border.color}",
              color: "{content.color}",
              borderWidth: "0 0 1px 0",
              padding: "0.75rem 1rem"
          },
          headerCell: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              borderColor: "{treetable.border.color}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              selectedColor: "{highlight.color}",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              }
          },
          columnTitle: {
              fontWeight: "600"
          },
          row: {
              background: "{content.background}",
              hoverBackground: "{content.hover.background}",
              selectedBackground: "{highlight.background}",
              color: "{content.color}",
              hoverColor: "{content.hover.color}",
              selectedColor: "{highlight.color}",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "-1px",
                  shadow: "{focus.ring.shadow}"
              }
          },
          bodyCell: {
              borderColor: "{treetable.border.color}",
              padding: "0.75rem 1rem",
              gap: "0.5rem"
          },
          footerCell: {
              background: "{content.background}",
              borderColor: "{treetable.border.color}",
              color: "{content.color}",
              padding: "0.75rem 1rem"
          },
          columnFooter: {
              fontWeight: "600"
          },
          footer: {
              background: "{content.background}",
              borderColor: "{treetable.border.color}",
              color: "{content.color}",
              borderWidth: "0 0 1px 0",
              padding: "0.75rem 1rem"
          },
          columnResizerWidth: "0.5rem",
          resizeIndicator: {
              width: "1px",
              color: "{primary.color}"
          },
          sortIcon: {
              color: "{text.muted.color}",
              hoverColor: "{text.hover.muted.color}",
              size: "0.875rem"
          },
          loadingIcon: {
              size: "2rem"
          },
          nodeToggleButton: {
              hoverBackground: "{content.hover.background}",
              selectedHoverBackground: "{content.background}",
              color: "{text.muted.color}",
              hoverColor: "{text.color}",
              selectedHoverColor: "{primary.color}",
              size: "1.75rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  color: "{focus.ring.color}",
                  offset: "{focus.ring.offset}",
                  shadow: "{focus.ring.shadow}"
              }
          },
          paginatorTop: {
              borderColor: "{content.border.color}",
              borderWidth: "0 0 1px 0"
          },
          paginatorBottom: {
              borderColor: "{content.border.color}",
              borderWidth: "0 0 1px 0"
          },
          colorScheme: {
              light: {
                  root: {
                      borderColor: "{content.border.color}"
                  },
                  bodyCell: {
                      selectedBorderColor: "{primary.100}"
                  }
              },
              dark: {
                  root: {
                      borderColor: "{surface.800}"
                  },
                  bodyCell: {
                      selectedBorderColor: "{primary.900}"
                  }
              }
          }
      },
      toast: {
          root: {
              width: "25rem",
              borderRadius: "{content.border.radius}",
              borderWidth: "1px",
              transitionDuration: "{transition.duration}"
          },
          icon: {
              size: "1.125rem"
          },
          content: {
              padding: "{overlay.popover.padding}",
              gap: "0.5rem"
          },
          text: {
              gap: "0.5rem"
          },
          summary: {
              fontWeight: "500",
              fontSize: "1rem"
          },
          detail: {
              fontWeight: "500",
              fontSize: "0.875rem"
          },
          closeButton: {
              width: "1.75rem",
              height: "1.75rem",
              borderRadius: "50%",
              focusRing: {
                  width: "{focus.ring.width}",
                  style: "{focus.ring.style}",
                  offset: "{focus.ring.offset}"
              }
          },
          closeIcon: {
              size: "1rem"
          },
          colorScheme: {
              light: {
                  blur: "1.5px",
                  info: {
                      background: "color-mix(in srgb, {blue.50}, transparent 5%)",
                      borderColor: "{blue.200}",
                      color: "{blue.600}",
                      detailColor: "{surface.700}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{blue.100}",
                          focusRing: {
                              color: "{blue.600}",
                              shadow: "none"
                          }
                      }
                  },
                  success: {
                      background: "color-mix(in srgb, {green.50}, transparent 5%)",
                      borderColor: "{green.200}",
                      color: "{green.600}",
                      detailColor: "{surface.700}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{green.100}",
                          focusRing: {
                              color: "{green.600}",
                              shadow: "none"
                          }
                      }
                  },
                  warn: {
                      background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      borderColor: "{yellow.200}",
                      color: "{yellow.600}",
                      detailColor: "{surface.700}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{yellow.100}",
                          focusRing: {
                              color: "{yellow.600}",
                              shadow: "none"
                          }
                      }
                  },
                  error: {
                      background: "color-mix(in srgb, {red.50}, transparent 5%)",
                      borderColor: "{red.200}",
                      color: "{red.600}",
                      detailColor: "{surface.700}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{red.100}",
                          focusRing: {
                              color: "{red.600}",
                              shadow: "none"
                          }
                      }
                  },
                  secondary: {
                      background: "{surface.100}",
                      borderColor: "{surface.200}",
                      color: "{surface.600}",
                      detailColor: "{surface.700}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.200}",
                          focusRing: {
                              color: "{surface.600}",
                              shadow: "none"
                          }
                      }
                  },
                  contrast: {
                      background: "{surface.900}",
                      borderColor: "{surface.950}",
                      color: "{surface.50}",
                      detailColor: "{surface.0}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.800}",
                          focusRing: {
                              color: "{surface.50}",
                              shadow: "none"
                          }
                      }
                  }
              },
              dark: {
                  blur: "10px",
                  info: {
                      background: "color-mix(in srgb, {blue.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
                      color: "{blue.500}",
                      detailColor: "{surface.0}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{blue.500}",
                              shadow: "none"
                          }
                      }
                  },
                  success: {
                      background: "color-mix(in srgb, {green.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
                      color: "{green.500}",
                      detailColor: "{surface.0}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{green.500}",
                              shadow: "none"
                          }
                      }
                  },
                  warn: {
                      background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      color: "{yellow.500}",
                      detailColor: "{surface.0}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{yellow.500}",
                              shadow: "none"
                          }
                      }
                  },
                  error: {
                      background: "color-mix(in srgb, {red.500}, transparent 84%)",
                      borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
                      color: "{red.500}",
                      detailColor: "{surface.0}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "rgba(255, 255, 255, 0.05)",
                          focusRing: {
                              color: "{red.500}",
                              shadow: "none"
                          }
                      }
                  },
                  secondary: {
                      background: "{surface.800}",
                      borderColor: "{surface.700}",
                      color: "{surface.300}",
                      detailColor: "{surface.0}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.700}",
                          focusRing: {
                              color: "{surface.300}",
                              shadow: "none"
                          }
                      }
                  },
                  contrast: {
                      background: "{surface.0}",
                      borderColor: "{surface.100}",
                      color: "{surface.950}",
                      detailColor: "{surface.950}",
                      shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      closeButton: {
                          hoverBackground: "{surface.100}",
                          focusRing: {
                              color: "{surface.950}",
                              shadow: "none"
                          }
                      }
                  }
              }
          }
      },
      toolbar: {
          root: {
              background: "{content.background}",
              borderColor: "{content.border.color}",
              borderRadius: "{content.border.radius}",
              color: "{content.color}",
              gap: "0.5rem",
              padding: "0.75rem"
          }
      },
      virtualscroller: {
          loader: {
              mask: {
                  background: "{content.background}",
                  color: "{text.muted.color}"
              },
              icon: {
                  size: "2rem"
              }
          }
      },
      tooltip: {
          root: {
              maxWidth: "12.5rem",
              gutter: "0.25rem",
              shadow: "{overlay.popover.shadow}",
              padding: "0.5rem 0.75rem",
              borderRadius: "{overlay.popover.border.radius}"
          },
          colorScheme: {
              light: {
                  root: {
                      background: "{surface.700}",
                      color: "{surface.0}"
                  }
              },
              dark: {
                  root: {
                      background: "{surface.700}",
                      color: "{surface.0}"
                  }
              }
          }
      },
      ripple: {
          colorScheme: {
              light: {
                  root: {
                      background: "rgba(0,0,0,0.1)"
                  }
              },
              dark: {
                  root: {
                      background: "rgba(255,255,255,0.3)"
                  }
              }
          }
      }
  }
}));