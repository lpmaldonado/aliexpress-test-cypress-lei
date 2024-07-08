Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('ResizeObserver loop limit exceeded') || err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
        return false;
    }
    return true;
});