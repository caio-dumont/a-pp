import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Criação de 5 Administradores
    const administradores = await prisma.administrador.createMany({
        data: [
            { nome: 'Administrador 1', email: 'admin1@dominio.com', senha: 'senha123' },
            { nome: 'Administrador 2', email: 'admin2@dominio.com', senha: 'senha123' },
            { nome: 'Administrador 3', email: 'admin3@dominio.com', senha: 'senha123' },
            { nome: 'Administrador 4', email: 'admin4@dominio.com', senha: 'senha123' },
            { nome: 'Administrador 5', email: 'admin5@dominio.com', senha: 'senha123' },
        ],
    })

    // Criação de 5 Disciplinas
    const disciplinas = await prisma.disciplina.createMany({
        data: [
            { nome: 'Matemática' },
            { nome: 'Física' },
            { nome: 'Química' },
            { nome: 'História' },
            { nome: 'Geografia' },
        ],
    })

    // Criação de 5 Professores
    const professores = await prisma.professor.createMany({
        data: [
            { nome: 'Professor A', email: 'professorA@dominio.com', senha: 'senha123', id_disciplina: 1 },
            { nome: 'Professor B', email: 'professorB@dominio.com', senha: 'senha123', id_disciplina: 2 },
            { nome: 'Professor C', email: 'professorC@dominio.com', senha: 'senha123', id_disciplina: 3 },
            { nome: 'Professor D', email: 'professorD@dominio.com', senha: 'senha123', id_disciplina: 4 },
            { nome: 'Professor E', email: 'professorE@dominio.com', senha: 'senha123', id_disciplina: 5 },
        ],
    })

    // Criação de 5 Salas
    const salas = await prisma.sala.createMany({
        data: [
            { nome: 'Sala 101' },
            { nome: 'Sala 102' },
            { nome: 'Sala 103' },
            { nome: 'Sala 104' },
            { nome: 'Sala 105' },
        ],
    })

    // Criação de 5 Turmas
    const turmas = await prisma.turma.createMany({
        data: [
            { ano: new Date('2024-01-01'), id_sala: 1 },
            { ano: new Date('2024-01-01'), id_sala: 2 },
            { ano: new Date('2024-01-01'), id_sala: 3 },
            { ano: new Date('2024-01-01'), id_sala: 4 },
            { ano: new Date('2024-01-01'), id_sala: 5 },
        ],
    })

    // Criação de 5 Alunos
    const alunos = await prisma.aluno.createMany({
        data: [
            { nome: 'Aluno 1', email: 'aluno1@dominio.com', senha: 'senha123', id_turma: 1 },
            { nome: 'Aluno 2', email: 'aluno2@dominio.com', senha: 'senha123', id_turma: 2 },
            { nome: 'Aluno 3', email: 'aluno3@dominio.com', senha: 'senha123', id_turma: 3 },
            { nome: 'Aluno 4', email: 'aluno4@dominio.com', senha: 'senha123', id_turma: 4 },
            { nome: 'Aluno 5', email: 'aluno5@dominio.com', senha: 'senha123', id_turma: 5 },
        ],
    })

    // Criação de 5 Aulas
    const aulas = await prisma.aula.createMany({
        data: [
            { dia: new Date('2024-01-01T08:00:00'), id_prof: 1, id_turma: 1 },
            { dia: new Date('2024-01-01T09:00:00'), id_prof: 2, id_turma: 2 },
            { dia: new Date('2024-01-01T10:00:00'), id_prof: 3, id_turma: 3 },
            { dia: new Date('2024-01-01T11:00:00'), id_prof: 4, id_turma: 4 },
            { dia: new Date('2024-01-01T12:00:00'), id_prof: 5, id_turma: 5 },
        ],
    })

    // Criação de 5 Chamadas
    const chamadas = await prisma.chamada.createMany({
        data: [
            { situacao: true, justificativa: null, id_aluno: 1, id_aula: 1 },
            { situacao: false, justificativa: 'Problemas de transporte', id_aluno: 2, id_aula: 2 },
            { situacao: true, justificativa: null, id_aluno: 3, id_aula: 3 },
            { situacao: true, justificativa: null, id_aluno: 4, id_aula: 4 },
            { situacao: false, justificativa: 'Doente', id_aluno: 5, id_aula: 5 },
        ],
    })

    console.log('Seeding completed!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
