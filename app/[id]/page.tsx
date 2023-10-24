import Home from "@/app/page";
import {ComponentProps, cache} from "react";
import {google} from "googleapis";

export const revalidate = 900; // 15 minutes

const fetchUser = cache(async (id: string | undefined) => {
    try {
        const emptyCheck = [
            process.env.GOOGLE_PROJECT_ID,
            process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            process.env.GOOGLE_PRIVATE_KEY,
            process.env.SHEET_ID,
        ];
        if (emptyCheck.some((item) => !item)) {
            return null;
        }

        const auth = await google.auth.getClient({
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
            projectId: process.env.GOOGLE_PROJECT_ID,
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY,
            },
        });

        const sheets = google.sheets({version: 'v4', auth});

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Custom landing!B2:C1000',
        });
        const values = response.data.values;
        if (!values) {
            return null;
        }
        const invitee = values.find((row) => row[0] === id);
        if (!invitee) {
            return null;
        }
        return invitee[1];
    } catch (e) {
        return null;
    }
})

export default async function CustomHome(props: ComponentProps<any>) {
    const invitee: string | null = await fetchUser(props.params.id);
    return <Home invitee={invitee}/>
}
