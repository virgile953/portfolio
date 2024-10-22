// app/api/projects/route.ts
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
	try {
		const { id } = await req.json(); // Extract the project ID from the request body
		// Fetch project details from the database
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

		return new Response(JSON.stringify(rows[0]), { // Return the first row if multiple are returned
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
