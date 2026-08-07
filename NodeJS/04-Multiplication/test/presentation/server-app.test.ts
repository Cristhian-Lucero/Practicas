import { ServerApp } from '../../src/presentation/server-app';
describe('test server-app', () => {
    test('should create ServerApp instance', () => {
        const serverApp = new ServerApp()
        expect(serverApp).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp.run).toBe('function')
    })
})