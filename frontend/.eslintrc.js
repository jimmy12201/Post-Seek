module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            0,
            "windows"
        ],
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            1,
            "always"
        ],
        "no-unused-vars": 1,
        "no-undef": 0,
        "no-console": 1
    }
};
