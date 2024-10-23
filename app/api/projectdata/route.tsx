// app/api/projects/route.ts
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
	try {
		const { id } = await req.json();
		// nice sql request that HAS to be this long because i fucked up the db's creation
		const { rows } = await sql`SELECT
									 projects.id,
									 projects.title,
									 projectdetails.description,
									 projectdetails.overview,
									 projectdetails.key_features,
									 projectdetails.technologies_used,
									 projectdetails.impact
								 FROM
									 projects
								 JOIN
									 projectdetails ON projects.id = projectdetails.project_id
								 WHERE project_id = ${id}`;

		if (rows.length === 0) {
			return new Response('Project not found', { status: 404 });
		}

		return new Response(JSON.stringify(rows[0]), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error('Error fetching project:', error);
		return new Response('Error fetching project', { status: 500 });
	}
}
