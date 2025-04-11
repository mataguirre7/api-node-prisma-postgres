import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const enrollments = prisma.enrollment;

export default {
  getList: async () => {
    return enrollments.findMany();
  },
  getOne: async (id) => {
    return enrollments.findOne({
      where: {
        id,
      },
    });
  },
  delete: async (id) => {
    return enrollments.delete({
      where: {
        id,
      },
    });
  },
  create: async (data) => {
    return enrollments.create({
      data,
    });
  },
  createMany: async (data) => {
    return enrollments.createMany({
      data,
    });
  },
  update: async (userId, courseId, data) => {
    return enrollments.update({
      where: {
        AND: [courseId, userId],
      },
      data,
    });
  },
};
