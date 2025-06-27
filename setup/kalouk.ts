import { definePreset } from "@primeuix/themes";
import Material from "@primeuix/themes/material";

const Kalouk = definePreset(Material, {
  semantic: {
    primary: {
      50: "#eff1f5", // base (lightest)
      100: "#e6e9ef", // mantle
      200: "#dce0e8", // crust
      300: "#89dceb", // sky (light blue)
      400: "#74c7ec", // sapphire (medium blue)
      500: "#1e66f5", // blue (main primary - latte)
      600: "#209fb5", // sapphire (darker)
      700: "#04a5e5", // sky (darker)
      800: "#179299", // teal
      900: "#4c4f69", // text (darkest for light theme)
      950: "#1e1e2e", // base dark (darkest)
    },
    colorScheme: {
      light: {
        focusRing: {
          shadow: "#1e66f5", // blue for focus indicators
        },
        surface: {
          0: "#eff1f5", // base - lightest background
          50: "#e6e9ef", // mantle
          100: "#dce0e8", // crust
          200: "#ccd0da", // surface0
          300: "#bcc0cc", // surface1
          400: "#acb0be", // surface2
          500: "#9ca0b0", // overlay0
          600: "#8c8fa1", // overlay1
          700: "#7c7f93", // overlay2
          800: "#6c6f85", // subtext0
          900: "#5c5f77", // subtext1
          950: "#4c4f69", // text - darkest
        },
        primary: {
          color: "#1e66f5", // blue
          contrastColor: "#eff1f5", // base (white text on blue)
          hoverColor: "#209fb5", // sapphire (darker blue)
          activeColor: "#04a5e5", // sky (lighter blue)
        },
        highlight: {
          background: "#df8e1d", // yellow for highlights
          focusBackground: "#fe640b", // peach for focused highlights
          color: "#4c4f69", // text
          focusColor: "#eff1f5", // base (white text on colored background)
        },
        mask: {
          background: "rgba(76, 79, 105, 0.6)", // text with transparency
          color: "#eff1f5", // base
        },
        formField: {
          background: "#eff1f5", // base
          disabledBackground: "#e6e9ef", // mantle
          filledBackground: "#dce0e8", // crust
          filledHoverBackground: "#ccd0da", // surface0
          filledFocusBackground: "#bcc0cc", // surface1
          borderColor: "#acb0be", // surface2
          hoverBorderColor: "#1e66f5", // blue
          focusBorderColor: "#04a5e5", // sky
          invalidBorderColor: "#d20f39", // red
          color: "#4c4f69", // text
          disabledColor: "#6c6f85", // subtext0
          placeholderColor: "#8c8fa1", // overlay1
          invalidPlaceholderColor: "#d20f39", // red
          floatLabelColor: "#5c5f77", // subtext1
          floatLabelFocusColor: "#1e66f5", // blue
          floatLabelActiveColor: "#04a5e5", // sky
          floatLabelInvalidColor: "#d20f39", // red
          iconColor: "#6c6f85", // subtext0
          shadow: "rgba(30, 102, 245, 0.1)", // blue with transparency
        },
        text: {
          color: "#4c4f69", // text
          hoverColor: "#1e66f5", // blue
          mutedColor: "#6c6f85", // subtext0
          hoverMutedColor: "#5c5f77", // subtext1
        },
        content: {
          background: "#eff1f5", // base
          hoverBackground: "#e6e9ef", // mantle
          borderColor: "#ccd0da", // surface0
          color: "#4c4f69", // text
          hoverColor: "#1e66f5", // blue
        },
        overlay: {
          select: {
            background: "#eff1f5", // base
            borderColor: "#acb0be", // surface2
            color: "#4c4f69", // text
          },
          popover: {
            background: "#eff1f5", // base
            borderColor: "#acb0be", // surface2
            color: "#4c4f69", // text
          },
          modal: {
            background: "#eff1f5", // base
            borderColor: "#acb0be", // surface2
            color: "#4c4f69", // text
          },
        },
        list: {
          option: {
            focusBackground: "#e6e9ef", // mantle
            selectedBackground: "#1e66f5", // blue
            selectedFocusBackground: "#04a5e5", // sky
            color: "#4c4f69", // text
            focusColor: "#4c4f69", // text
            selectedColor: "#eff1f5", // base (white text on blue)
            selectedFocusColor: "#eff1f5", // base
            icon: {
              color: "#6c6f85", // subtext0
              focusColor: "#1e66f5", // blue
            },
          },
          optionGroup: {
            background: "#e6e9ef", // mantle
            color: "#5c5f77", // subtext1
          },
        },
        navigation: {
          item: {
            focusBackground: "#e6e9ef", // mantle
            activeBackground: "#1e66f5", // blue
            color: "#4c4f69", // text
            focusColor: "#4c4f69", // text
            activeColor: "#eff1f5", // base (white text on blue)
            icon: {
              color: "#6c6f85", // subtext0
              focusColor: "#1e66f5", // blue
              activeColor: "#eff1f5", // base
            },
          },
          submenuLabel: {
            background: "#e6e9ef", // mantle
            color: "#5c5f77", // subtext1
          },
          submenuIcon: {
            color: "#6c6f85", // subtext0
            focusColor: "#1e66f5", // blue
            activeColor: "#eff1f5", // base
          },
        },
      },
      dark: {
        focusRing: {
          shadow: "#89b4fa", // blue for focus indicators
        },
        surface: {
          0: "#1e1e2e", // base - darkest background
          50: "#181825", // mantle
          100: "#11111b", // crust
          200: "#313244", // surface0
          300: "#45475a", // surface1
          400: "#585b70", // surface2
          500: "#6c7086", // overlay0
          600: "#7f849c", // overlay1
          700: "#9399b2", // overlay2
          800: "#a6adc8", // subtext0
          900: "#bac2de", // subtext1
          950: "#cdd6f4", // text - lightest
        },
        primary: {
          color: "#89b4fa", // blue
          contrastColor: "#1e1e2e", // base (dark text on blue)
          hoverColor: "#74c7ec", // sapphire (lighter blue)
          activeColor: "#89dceb", // sky (even lighter blue)
        },
        highlight: {
          background: "#f9e2af", // yellow for highlights
          focusBackground: "#fab387", // peach for focused highlights
          color: "#1e1e2e", // base (dark text on colored background)
          focusColor: "#1e1e2e", // base
        },
        mask: {
          background: "rgba(205, 214, 244, 0.6)", // text with transparency
          color: "#1e1e2e", // base
        },
        formField: {
          background: "#1e1e2e", // base
          disabledBackground: "#181825", // mantle
          filledBackground: "#11111b", // crust
          filledHoverBackground: "#313244", // surface0
          filledFocusBackground: "#45475a", // surface1
          borderColor: "#585b70", // surface2
          hoverBorderColor: "#89b4fa", // blue
          focusBorderColor: "#89dceb", // sky
          invalidBorderColor: "#f38ba8", // red
          color: "#cdd6f4", // text
          disabledColor: "#a6adc8", // subtext0
          placeholderColor: "#7f849c", // overlay1
          invalidPlaceholderColor: "#f38ba8", // red
          floatLabelColor: "#bac2de", // subtext1
          floatLabelFocusColor: "#89b4fa", // blue
          floatLabelActiveColor: "#89dceb", // sky
          floatLabelInvalidColor: "#f38ba8", // red
          iconColor: "#a6adc8", // subtext0
          shadow: "rgba(137, 180, 250, 0.1)", // blue with transparency
        },
        text: {
          color: "#cdd6f4", // text
          hoverColor: "#89b4fa", // blue
          mutedColor: "#a6adc8", // subtext0
          hoverMutedColor: "#bac2de", // subtext1
        },
        content: {
          background: "#1e1e2e", // base
          hoverBackground: "#181825", // mantle
          borderColor: "#313244", // surface0
          color: "#cdd6f4", // text
          hoverColor: "#89b4fa", // blue
        },
        overlay: {
          select: {
            background: "#1e1e2e", // base
            borderColor: "#585b70", // surface2
            color: "#cdd6f4", // text
          },
          popover: {
            background: "#1e1e2e", // base
            borderColor: "#585b70", // surface2
            color: "#cdd6f4", // text
          },
          modal: {
            background: "#1e1e2e", // base
            borderColor: "#585b70", // surface2
            color: "#cdd6f4", // text
          },
        },
        list: {
          option: {
            focusBackground: "#181825", // mantle
            selectedBackground: "#89b4fa", // blue
            selectedFocusBackground: "#89dceb", // sky
            color: "#cdd6f4", // text
            focusColor: "#cdd6f4", // text
            selectedColor: "#1e1e2e", // base (dark text on blue)
            selectedFocusColor: "#1e1e2e", // base
            icon: {
              color: "#a6adc8", // subtext0
              focusColor: "#89b4fa", // blue
            },
          },
          optionGroup: {
            background: "#181825", // mantle
            color: "#bac2de", // subtext1
          },
        },
        navigation: {
          item: {
            focusBackground: "#181825", // mantle
            activeBackground: "#89b4fa", // blue
            color: "#cdd6f4", // text
            focusColor: "#cdd6f4", // text
            activeColor: "#1e1e2e", // base (dark text on blue)
            icon: {
              color: "#a6adc8", // subtext0
              focusColor: "#89b4fa", // blue
              activeColor: "#1e1e2e", // base
            },
          },
          submenuLabel: {
            background: "#181825", // mantle
            color: "#bac2de", // subtext1
          },
          submenuIcon: {
            color: "#a6adc8", // subtext0
            focusColor: "#89b4fa", // blue
            activeColor: "#1e1e2e", // base
          },
        },
      },
    },
  },
});

export default Kalouk;
