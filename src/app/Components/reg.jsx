import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      rollNo,
      name,
      email,
      academicYear,
      gender,
      dateOfBirth,
      address,
      resumeUrl,
      linkedinUrl,
      githubUrl,
      fitReason,
      contribution,
    } = req.body;

    try {
      const registration = await prisma.registration.create({
        data: {
          rollNo,
          name,
          email,
          academicYear: parseInt(academicYear),
          gender,
          dateOfBirth: new Date(dateOfBirth),
          address,
          resumeUrl,
          linkedinUrl,
          githubUrl,
          fitReason,
          contribution,
        },
      });
      res.status(201).json({ message: 'Registration successful', registration });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
