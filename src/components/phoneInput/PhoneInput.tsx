import { PhoneInputProps } from '../../types/types';

export function PhoneInput({ handleChange, value, clazz }: PhoneInputProps) {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            const formattedPhoneNumber = formatPhoneNumber(e.target.value);
            e.target.value = formattedPhoneNumber;
            handleChange(e);
        }
    };

    return (
        <input
            type={'tel'}
            name="user_phone"
            className={clazz}
            onChange={(e) => handleInput(e)}
            value={value}
        />
    );
}

function formatPhoneNumber(value: string) {
    if (!value) return '+7';
    const phoneNumber = value.replace(/[^+7\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 3) return `+7`;
    if (phoneNumberLength < 6) return `${phoneNumber}`;
    if (phoneNumberLength < 10) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(
            2,
            5,
        )}) ${phoneNumber.slice(5)}`;
    }
    return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(
        2,
        5,
    )}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 12)}`;
}
