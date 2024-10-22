// app/api/projects/route.ts
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    // Fetch projects from the database
    const { rows } = await sql`SELECT * FROM Projects order by id desc`;

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return new Response('Error fetching projects', { status: 500 });
  }
}
