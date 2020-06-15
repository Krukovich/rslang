export const getInputData = () => {
    const emailInput = document.querySelector('[type="email"]');
    const passwordInput = document.querySelector('[type="password"]');
    return {
        "email": emailInput.value,
        "password": passwordInput.value
    }
};
