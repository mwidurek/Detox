const LogArtifactPlugin = require('./LogArtifactPlugin');

describe('LogArtifactPlugin', () => {
    describe('static parseConfig(config)', () => {
        const parseConfig = LogArtifactPlugin.parseConfig;

        const ENABLE_MODES = ['all', 'failing'].map(x => [x]);
        const DISABLE_MODES = ['none', { enabled: true }].map(x => [x]);

        const INCLUSIVE_MODES = ['all', 'manual', 'none', { keepOnlyFailedTestsArtifacts: true }].map(x => [x]);
        const EXCLUSIVE_MODES = ['failing'].map(x => [x]);

        it.each(ENABLE_MODES)('should enable plugin if config = %j', (config) =>
            expect(parseConfig(config).enabled).toBe(true));

        it.each(DISABLE_MODES)('should disable plugin if config = %j', (config) =>
            expect(parseConfig(config).enabled).toBe(false));

        it.each(INCLUSIVE_MODES)('should save all screenshots if config = %j', (config) =>
            expect(parseConfig(config).keepOnlyFailedTestsArtifacts).toBe(false));

        it.each(EXCLUSIVE_MODES)('should save all screenshots if config = %j', (config) =>
            expect(parseConfig(config).keepOnlyFailedTestsArtifacts).toBe(true));
    });
});
