import type { ChangeEvent } from 'react'
import _debounce from 'lodash/debounce'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { queryAtom } from '../../atoms'
export const HeaderSearchBar = () => {
    const [_, setQuery] = useAtom(queryAtom)

    const onChangeHandler = useCallback(
        _debounce((event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value)
        }, 500),
        []
    )
    return (
        <div className="flex grow mt-8 sm:mt-24">
            <div className="relative w-11/12 sm:w-full max-w-lg mx-auto">
                <div className="absolute inset-y-0 right-0 flex items-center px-5 py-3 pointer-events-none  bg-cyan-500 rounded-md">
                    <MagnifyingGlassIcon className='h-4 w-4 text-white font-bold' />
                </div>
                <input
                    className='block p-2.5 pl-10 w-full z-20 text-lg text-white bg-dark-200 border-none rounded-lg focus:border-dark-300 focus:border-2 focus-visible:outline-none'
                    type="search" 
                    placeholder='Search'
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    )
}