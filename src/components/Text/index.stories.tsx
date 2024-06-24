import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
    title: "Componets/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        as: "h1",
        children: "be parts corrects potatoes sides donkey extra climate ",
    }
};
