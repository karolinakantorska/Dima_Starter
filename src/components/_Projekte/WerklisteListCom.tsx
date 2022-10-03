
import { ListElement, } from '../../utils/TS/interface';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AlertCom } from '../_Reusable/AlertCom';
import WerklisteNewEditForm from './NewEditProjekt/WerklisteNewEditForm';
import useAuth from 'src/utils/firebaseAuth/useAuth';
import { WerkCom } from './WerklisteCom';
type Props = {
    data: ListElement[]
}

export interface List extends ListElement {
    changed: boolean;
    newYear: string
}
export function WerklisteListCom({ data }: Props) {

    const [error, setError] = useState<null | { code: string, message: string }>(null)
    const [succes, setSucces] = useState<boolean | string>(false);
    const [loading, setLoading] = useState(false);

    const { reload } = useRouter();
    const { isAuthenticated } = useAuth();
    useEffect(() => {
        if (succes) {
            setTimeout(() => {
                setSucces(false);
            }, 2500);
            reload();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [succes]);

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(null), 5000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);


    const changedList: List[] = [];

    data.map((item, i) => {
        let changed = true;
        const newYear = new Date(item.date).toLocaleString('de-DE', { dateStyle: "long" }).slice(-4);
        if ((changedList.length > 0)) {
            if (changedList[i - 1].newYear === newYear) {
                changed = false;
            }
        }
        changedList.push({ ...item, newYear, changed })
    })

    if (data.length > 0) {
        return (
            <>
                <AlertCom succes={succes} error={error} loading={loading} setError={setError} />
                {changedList.map((item: List, i: number) => (
                    <WerkCom key={i} item={item} setSucces={setSucces} setLoading={setLoading} setError={setError} loading={loading} />
                ))}
                {isAuthenticated && <WerklisteNewEditForm isEdit={false} setSucces={setSucces} setLoading={setLoading} setError={setError} loading={loading} />}
            </>
        );
    } else {
        return (
            <p>Werkliste is momentan leer</p>
        )

    }

}
