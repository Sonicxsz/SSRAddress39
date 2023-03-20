type setter = (state: boolean) => void;
import { useAppDispatch } from "../hooks/useRedux";
export function openModal(setter: setter) {
    setter(true);
}
export function closeModal(setter: setter) {
    setter(false);
}
