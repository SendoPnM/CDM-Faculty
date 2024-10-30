import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function OnlineExam({  auth }) {
    return (
        <Layout 
        isAdmin={auth.isAdmin}
        user={auth.user} 
        icon={<PencilSquareIcon className='w-9 h-9 text-gray-500' />} 
        headerTitle='Online Exam' 
        headerSubtitle='View Online Exam'>
            <Head title='Online Exam' />
            <SingleCardWithHeader
                header="Online Exam"
                body={
                    <p>

                        the action or process of talking about something in order to reach a decision or to exchange ideas.<br />"the proposals are not a blueprint but ideas for discussion"
                    </p>}
            />

        </Layout>
    )
}

