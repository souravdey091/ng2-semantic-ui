import { AfterViewInit, EventEmitter, ElementRef, TemplateRef, Renderer2, OnDestroy } from "@angular/core";
import { ITemplateRefContext } from "../../../misc/util/index";
import { DropdownService } from "../../dropdown/index";
import { ISearchLocaleValues, RecursivePartial, SuiLocalizationService } from "../../../behaviors/localization/index";
import { SearchService } from "../services/search.service";
import { LookupFn, FilterFn } from "../helpers/lookup-fn";
export interface IResultContext<T> extends ITemplateRefContext<T> {
    query: string;
}
export declare class SuiSearch<T> implements AfterViewInit, OnDestroy {
    private _element;
    private _localizationService;
    dropdownService: DropdownService;
    searchService: SearchService<T, T>;
    private _menu;
    private _searchClasses;
    readonly isActive: boolean;
    hasIcon: boolean;
    private _placeholder;
    placeholder: string;
    private _localeValues;
    localeOverrides: RecursivePartial<ISearchLocaleValues>;
    readonly localeValues: ISearchLocaleValues;
    query: string;
    options: T[] | undefined;
    optionsFilter: FilterFn<T> | undefined;
    optionsLookup: LookupFn<T> | undefined;
    optionsField: string | undefined;
    private _resultFormatter?;
    resultFormatter: (result: T, query: string) => string;
    resultTemplate: TemplateRef<IResultContext<T>>;
    retainSelectedResult: boolean;
    searchDelay: number;
    readonly isSearching: boolean;
    maxResults: number;
    readonly results: T[];
    selectedResult?: T;
    onResultSelected: EventEmitter<T>;
    transition: string;
    transitionDuration: number;
    private _documentClickListener;
    constructor(_element: ElementRef, renderer: Renderer2, _localizationService: SuiLocalizationService);
    ngAfterViewInit(): void;
    private onLocaleUpdate();
    select(result: T): void;
    onClick(e: MouseEvent): void;
    private onFocusIn();
    private open();
    private onFocusOut(e);
    onDocumentClick(e: MouseEvent): void;
    readValue(object: T): string;
    ngOnDestroy(): void;
}
