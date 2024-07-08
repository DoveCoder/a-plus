import { Class } from "../../payload/payload-types";
import { CLASSES } from "../_graphql/classes";
import { GRAPHQL_API_URL } from "./shared";

export const fetchClasses = async (): Promise<Class[]> => {
  const docs: Class[] = await fetch(`${GRAPHQL_API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: CLASSES,
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching docs')

      return res?.data?.Classes.docs
    })

  return docs
}
