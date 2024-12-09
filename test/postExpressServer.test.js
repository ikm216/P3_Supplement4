const request = require('supertest');
const app = require('../postExpressServer');

describe('POST /', () => {
    it('should return the response with the content field from the JSON body', async () => {
        const response = (await request(app).post('/')).send({content: 'Chicken on Me'}).set('Content-Type', 'application/json');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Chicken on Me');
    });
})