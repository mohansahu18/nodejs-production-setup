module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feature', 'bug', 'build', 'style', 'refactor']],
        'type-case': [2, 'always', 'lowercase'],
        'subject-case': [0],
        'type-empty': [2, 'never'],
        'subject-empty': [0],
        'scope-case': [0],
        'header-max-length': [2, 'always', 100],
        'header-full-stop': [2, 'never', '.'],
        'scope-empty': [0],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(feature|bug|build|style|refactor)\/([a-z0-9-]+)$/,
            headerCorrespondence: ['type', 'scope']
        }
    }
};