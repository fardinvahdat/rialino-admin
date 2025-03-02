const nameRule = [
    value => {
        if (!value) return 'Is required.'
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
        if (value?.length >= 100) return 'Must be less than 100 characters.'
    },
]

const titleRule = [
    value => {
        if (!value) return 'Is required.'
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
        if (value?.length >= 100) return 'Must be less than 100 characters.'
    },
]

const allonymRule = [
    value => {
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
        if (value?.length >= 100) return 'Must be less than 100 characters.'
    }
]

const emailRule = [
    value => {
        if (!value) return 'Is requred.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true
        return 'Must be valid.'
    },

]

const mobileRule = [
    value => {
        if (!value) return 'Is requred.'
        else true
    },
    value => {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
    }
]

const telephoneRule = [
    value => {
        return true
    }
]

const faxRule = [
    value => {
        return true
    }
]

const companyRule = [
    value => {
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
        if (value?.length >= 100) return 'Must be less than 100 characters.'
    },
]

const postalCodeRule = [
    value => {
        if (!value) return 'Is requred.'
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
        if (value?.length >= 100) return 'Must be less than 100 characters.'
    },
]

const stateIdRule = [
    value => {
        return true
    },
]

const cityIdRule = [
    value => {
        return true
    },
]


const birthDayRule = [
    value => {
        return true
    }
]

const occasionDateRule = [
    value => {
        return true
    }
]

const addressRule = [
    value => {
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
        if (value?.length >= 100) return 'Must be less than 100 characters.'
    }
]

const descriptionRule = [
    value => {
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
    }
]

const messageRule = [
    value => {
        if (!value) return 'Is requred.'
        if (value?.length <= 2) return 'Must be longer than 2 characters.'
    }
]

const numbersRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const coefficientRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const sendTariffRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const receiveTriffRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]
const driverInstanceRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const lineRules = [
    value => {
        if (!value) return 'Is requred.'
    }
]
const costPurchasingRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const costSellingRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]
const numberAgentsRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const numberUserRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]
const priceRule = [
    value => {
        if (value) return true
        return 'Is requred.'
    }
]

const roleRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const titleRole = [
    value => {
        if (value) return true
        return 'Is requred.'
    }
]
const amountRule = [
    value => {
        if (!value) return 'Is requred.'
    }
]

const expireRole = [
    value => {
        if (value) return true
        return 'Is requred.'
    }
]

export default {
    expireRole,
    amountRule,
    titleRole,
    roleRule,
    priceRule,
    numberUserRule,
    numberAgentsRule,
    costSellingRule,
    costPurchasingRule,
    lineRules,
    driverInstanceRule,
    numbersRule,
    messageRule,
    receiveTriffRule,
    sendTariffRule,
    coefficientRule,
    titleRule,
    descriptionRule,
    addressRule,
    occasionDateRule,
    birthDayRule,
    cityIdRule,
    nameRule,
    allonymRule,
    emailRule,
    mobileRule,
    telephoneRule,
    faxRule,
    companyRule,
    postalCodeRule,
    stateIdRule
}