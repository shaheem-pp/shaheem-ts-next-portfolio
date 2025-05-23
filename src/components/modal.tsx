// src/components/modal.tsx

'use client';

import {Dialog, Transition} from '@headlessui/react';
import {Fragment} from 'react';
import {ExternalLink, X} from 'lucide-react';
import {Badge} from "@/components/ui/badge";

import {Project} from "@/app/projects/constants";

interface ProjectModalProps {
    isOpen: boolean;
    closeModal: () => void;
    project: Project;
}


export default function ProjectModal({isOpen, closeModal, project}: ProjectModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-4xl h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 text-left align-middle shadow-xl transition-all flex flex-col">

                                {/* Sticky Header */}
                                <div
                                    className="sticky top-0 z-10 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 p-6 border-b dark:border-zinc-700 flex justify-between items-stretch">
                                    <div>
                                        <h1 className="text-2xl font-bold">{project.title}</h1>
                                        <Badge variant="project">{project.category}</Badge>
                                    </div>
                                    <button onClick={closeModal}>
                                        <X className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"/>
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto flex-1 p-6 space-y-6 text-gray-800 dark:text-gray-100">

                                    {/* Image */}
                                    <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-800 p-2">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full object-cover max-h-[70vh] rounded-md"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="prose max-w-none dark:prose-invert">
                                        <div dangerouslySetInnerHTML={{__html: project.description}}/>
                                    </div>

                                    {/* Metadata */}
                                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="font-medium">Status:</span>
                                            <Badge variant="outline">{project.status}</Badge>
                                        </div>

                                        <div className="mt-2">
                                            <span className="font-medium">Tech Stack:</span>
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                {project.stack.map((tech, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* External Links */}
                                    {Object.keys(project.links).length > 0 && (
                                        <div className="pt-2 border-t dark:border-zinc-700">
                                            <span
                                                className="font-medium text-sm text-gray-600 dark:text-gray-300">Links:</span>
                                            <div className="flex flex-wrap gap-3 mt-2">
                                                {Object.entries(project.links)
                                                    .filter(([_, url]) => typeof url === "string" && url.trim() !== "")
                                                    .map(([iconClass, url], idx) => (
                                                        <a
                                                            key={idx}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                        >
                                                            <ExternalLink className="w-4 h-4"/>
                                                            {url && new URL(url).hostname.replace("www.", "")}
                                                        </a>
                                                    ))}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}