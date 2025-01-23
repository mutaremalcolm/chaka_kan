import { UniqueIdentifier } from "@dnd-kit/core";
import { ContainerType } from "../..";

export const isContainerNameEmpty = (
    editingContainerName: string,
    editingContainer: UniqueIdentifier | null,
    containers: ContainerType[]
): boolean => {
    return (
        editingContainerName.trim() !== "" &&
        containers.some(
            (container) => 
                container.id === editingContainer && 
                container.title !== editingContainerName.trim()
        )
    );
};

export const iseditingItemNameChanged = (
    editingItemName: string,
    editingItem: UniqueIdentifier | null,
    containers: ContainerType[]
): boolean => {
    return (
        editingItemName.trim() !== "" &&
        containers.some((container) =>
        container.items.some(
            (item) => 
                item.id === editingItem && item.title !== editingItemName.trim()
            )
        )
    );
};