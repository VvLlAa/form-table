export const validateForm = (formData) => {
    const errors = {
        name: formData.name.trim().length === 0,
        birthDate: formData.birthDate.trim().length === 0,
        phone: !validatePhone(formData.phone),
        email: !validateEmail(formData.email),
    };

    const isValid = !errors.name && !errors.birthDate && !errors.phone && !errors.email;

    return {
        isValid,
        errors,
        data: isValid
            ? {
                id: Date.now(),
                ...formData,
            }
            : null,
    };
}

const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const validatePhone = (phone) => {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
};