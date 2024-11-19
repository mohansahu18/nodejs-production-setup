module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feature",
                "fix",
                "refactor",
                "test",
                "build",
            ]
        ],
        "subject-case": [2, "always", ["sentence-case", "lower-case"]]
    }
}