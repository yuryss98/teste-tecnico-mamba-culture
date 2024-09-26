import { describe, test, expect } from '@jest/globals';
import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import app from '../../src/main/config/app';
import { CATEGORIES_MOCK } from '../mocks/categories.mock';

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    categories: {
      findMany: jest.fn().mockResolvedValue(CATEGORIES_MOCK),
    },
    $disconnect: jest.fn(),
  })),
}));

describe('GET api/category/findAll', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should return all categories', async () => {
    const result = await request(app)
      .get('/api/category/findAll');
    expect(result.status).toEqual(200);
    expect(result.body).toStrictEqual({
      body: CATEGORIES_MOCK,
    });

    const prisma = new PrismaClient();
    expect(prisma.categories.findMany).not.toHaveBeenCalled();
  });
});
