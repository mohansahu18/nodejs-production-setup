module.exports = {
    extends: ["@commitlint/cli", "@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feature/",
                "fix/",
                "refactor/",
                "build/",
            ]
        ],
        "subject-case": [2, "always", "sentence-case"]
    }
}