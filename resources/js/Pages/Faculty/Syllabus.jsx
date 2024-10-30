import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head, useForm } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import { DocumentIcon } from '@heroicons/react/24/outline'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Syllabus({ auth, paginated }) {

    const { data, setData, post, errors } = useForm({
        type: 'syllabus',
        file: null
    });

    const submit = (e) => {
        e.preventDefault();
        if (data.file != null) {
            post(route('file.store'), { onSuccess: () => reset() });
        }
    }

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<DocumentIcon className='w-9 h-9 text-gray-500' />}
            headerTitle="Syllabus"
            headerSubtitle='Files'
            openDropdown={true}>
            <Head title='Files' />
            <CardsWithSticky
                cards={
                    <SingleCardCenter
                        bodyPadding='p-4'
                        table={
                            <div className='table-responsive'>

                                <table className='datatable-table text-center mt-3'>
                                    <thead>
                                        <tr className='card-header'>
                                            <th>Name</th>
                                            <th>Size</th>
                                            <th>Uploaded</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            paginated.data.map(file =>
                                                <tr key={file.id}>
                                                    <td>{file.name}</td>
                                                    <td>{file.size}</td>
                                                    <td>{file.created_at}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    />
                }
                stickyNavHeader="Upload a File"
                stickyNavBody={
                    <div className='h-36 relative '>
                        <form onSubmit={submit}>
                            <div className='mb-3'>

                                <TextInput
                                    id="syllabus"
                                    type="file"
                                    name="syllabus"
                                    onChange={(e) => setData('file', e.target.files[0])}
                                />

                                <InputError message={errors.file} className="mt-2" />
                            </div>
                            <PrimaryButton className='!absolute !-translate-x-2/4 !left-2/4 bottom-0'>
                                Upload
                            </PrimaryButton>
                        </form>
                    </div>
                }
            />

        </Layout>
    )
}