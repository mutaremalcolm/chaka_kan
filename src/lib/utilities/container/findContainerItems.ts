import { UniqueIdentifier } from "@dnd-kit/core";
import { ContainerType } from "../..";
import { findValueOfItems } from "../findValueOfItems";

export function findContainerItems(
    constianers: ContainerType[],
    id: UniqueIdentifier | undefined
) {
    const container = findValueOfItems(constianers, id, "container");
    if (!container) return [];
    return container.items;
}