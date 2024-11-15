module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feature', 'bug', 'build', 'style', 'refactor']],
        'type-case': [2, 'always', 'lowercase'],  // Changed from 'lower' to 'lowercase'
        'subject-case': [0],
        'type-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
        'scope-case': [0],
        'header-max-length': [2, 'always', 100],
        'header-full-stop': [2, 'never', '.'],
        'scope-empty': [0],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(feature|bug|chore|docs|style|refactor|test|ci)(?:\/([a-z0-9-]+))?\s(.+)$/,
            headerCorrespondence: ['type', 'scope', 'subject']
        }
    }
};