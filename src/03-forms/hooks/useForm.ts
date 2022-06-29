import { useState } from 'react';

export const useForm = <Type>(initvalue: Type) => {
    const [formData, setFormData] = useState(initvalue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const resetForm = () => {
        setFormData({ ...initvalue });
    }
    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return { formData, onChange, resetForm, isValidEmail, ...formData }
}
