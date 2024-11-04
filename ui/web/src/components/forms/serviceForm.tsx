"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Check,
    ChevronsUpDown,
    Upload,
    FileText,
    AlertTriangle,
    Plus,
    X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
    { value: "free", label: "Free" },
    { value: "starter", label: "Starter - $10/month" },
    { value: "pro", label: "Pro - $50/month" },
    { value: "enterprise", label: "Enterprise - Custom" },
];

const predefinedTags = [
    "Web",
    "Mobile",
    "API",
    "Database",
    "Analytics",
    "AI",
    "ML",
    "IoT",
    "Security",
    "DevOps",
];

export default function ServiceForm() {
    const [serviceName, setServiceName] = useState("");
    const [description, setDescription] = useState("");
    const [configType, setConfigType] = useState("ansible");
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState("");
    const [pricingTier, setPricingTier] = useState("");
    const [collaborators, setCollaborators] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (validateFileType(selectedFile)) {
                setFile(selectedFile);
                setError("");
                simulateUpload();
            } else {
                setError(
                    "Invalid file type. Please upload an Ansible, Terraform, or OpenTofu configuration file."
                );
                setFile(null);
            }
        }
    };

    const validateFileType = (file: File) => {
        const validExtensions = [".yml", ".yaml", ".tf", ".hcl"];
        return validExtensions.some((ext) =>
            file.name.toLowerCase().endsWith(ext)
        );
    };

    const simulateUpload = () => {
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 500);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Submitting:", {
            serviceName,
            description,
            configType,
            file,
            tags,
            pricingTier,
            collaborators,
        });
    };

    const addTag = () => {
        if (newTag && !tags.includes(newTag)) {
            setTags([...tags, newTag]);
            setNewTag("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Create a New Service</CardTitle>
                <CardDescription>
                    Distribute your software on the cloud with ease
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="service-name">Service Name</Label>
                        <Input
                            id="service-name"
                            placeholder="Enter service name"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your service..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Configuration Type</Label>
                        <RadioGroup
                            value={configType}
                            onValueChange={setConfigType}
                            className="flex space-x-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="ansible" id="ansible" />
                                <Label htmlFor="ansible">Ansible</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="terraform"
                                    id="terraform"
                                />
                                <Label htmlFor="terraform">Terraform</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="opentofu"
                                    id="opentofu"
                                />
                                <Label htmlFor="opentofu">OpenTofu</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="config-file">
                            Upload Configuration File
                        </Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="config-file"
                                type="file"
                                onChange={handleFileChange}
                                accept=".yml,.yaml,.tf,.hcl"
                                className="hidden"
                            />
                            <Button
                                type="button"
                                onClick={() =>
                                    document
                                        .getElementById("config-file")
                                        ?.click()
                                }
                            >
                                <Upload className="mr-2 h-4 w-4" /> Select File
                            </Button>
                            {file && (
                                <Badge variant="secondary">{file.name}</Badge>
                            )}
                        </div>
                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <Progress
                                value={uploadProgress}
                                className="w-full"
                            />
                        )}
                        {error && (
                            <Alert variant="destructive">
                                <AlertTriangle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Tags</Label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-sm"
                                >
                                    {tag}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="ml-2 h-4 w-4 p-0"
                                        onClick={() => removeTag(tag)}
                                    >
                                        <X className="h-3 w-3" />
                                    </Button>
                                </Badge>
                            ))}
                        </div>
                        <div className="flex space-x-2">
                            <Input
                                placeholder="Add a tag"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                            />
                            <Button type="button" onClick={addTag}>
                                <Plus className="mr-2 h-4 w-4" /> Add
                            </Button>
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                >
                                    {tags.length > 0
                                        ? `${tags.length} tags selected`
                                        : "Select predefined tags"}
                                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Search tags..." />
                                    <CommandEmpty>No tag found.</CommandEmpty>
                                    <CommandGroup>
                                        {predefinedTags.map((tag) => (
                                            <CommandItem
                                                key={tag}
                                                onSelect={() => {
                                                    setTags((prev) =>
                                                        prev.includes(tag)
                                                            ? prev.filter(
                                                                  (t) =>
                                                                      t !== tag
                                                              )
                                                            : [...prev, tag]
                                                    );
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        tags.includes(tag)
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                                {tag}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="pricing-tier">Pricing Tier</Label>
                        <Select
                            value={pricingTier}
                            onValueChange={setPricingTier}
                        >
                            <SelectTrigger id="pricing-tier">
                                <SelectValue placeholder="Select a pricing tier" />
                            </SelectTrigger>
                            <SelectContent>
                                {pricingTiers.map((tier) => (
                                    <SelectItem
                                        key={tier.value}
                                        value={tier.value}
                                    >
                                        {tier.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="collaborators">Collaborators</Label>
                        <Textarea
                            id="collaborators"
                            placeholder="Enter email addresses of collaborators, separated by commas"
                            value={collaborators}
                            onChange={(e) => setCollaborators(e.target.value)}
                        />
                    </div>

                    {file && (
                        <Alert>
                            <FileText className="h-4 w-4" />
                            <AlertTitle>File Preview</AlertTitle>
                            <AlertDescription>
                                Configuration file "{file.name}" selected. Type:{" "}
                                {configType.charAt(0).toUpperCase() +
                                    configType.slice(1)}
                            </AlertDescription>
                        </Alert>
                    )}
                </form>
            </CardContent>
            <CardFooter>
                <Button
                    type="submit"
                    className="w-full"
                    disabled={!file || uploadProgress < 100}
                >
                    Create Service
                </Button>
            </CardFooter>
        </Card>
    );
}
