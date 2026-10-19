# Minesweeper 💣

Jogo do Minesweeper (Campo Minado) feito em **React**, desenvolvido em 2024 como trabalho prático da unidade curricular de **Linguagens Script** (1.º ano, 2.º semestre) da Licenciatura em Engenharia Informática no ISEC (DEIS).

## Funcionalidades

- Três níveis de dificuldade:
  | Nível      | Grelha  | Minas |
  |------------|---------|-------|
  | Básico     | 9 × 9   | 10    |
  | Intermédio | 16 × 16 | 40    |
  | Avançado   | 16 × 30 | 99    |
- Revelação automática das células vazias à volta
- Marcação de células com bandeira 🚩 ou ponto de interrogação ❓
- Contador de minas e cronómetro
- Janela de fim de jogo (vitória / derrota)

## Como executar

É preciso ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm start
```

A aplicação abre em [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
├── components/   # Header, ControlPanel, GamePanel, Cell, GameOverModal, Footer
├── helpers/      # geração da grelha, colocação de minas, revelação de células
├── constants/    # níveis, valores das células, emojis
└── assets/       # estilos (CSS)
```
